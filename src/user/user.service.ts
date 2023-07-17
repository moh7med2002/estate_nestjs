import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { userRepositry } from 'src/constants/entityRepositry';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
import { UserLogin, UserSignup } from './dto';
import { VerifyPassword, hashPassword } from 'src/common/passwordUtil';
import { Verify } from 'crypto';
import { generateToken } from 'src/common/generateToken';

@Injectable()
export class UserService {
  constructor(
    @Inject(userRepositry)
    private userRepository: typeof User,
    private jwt: JwtService,
  ) {}

  async signup(dto: UserSignup): Promise<{ msg: string }> {
    const foundUserDb = await this.userRepository.findOne({
      where: {
        email: dto.email,
      },
    });
    if (foundUserDb) {
      throw new ForbiddenException('الإيميل مستخدم مسبقا');
    }
    const hashPs = await hashPassword(dto.password);
    const user = await this.userRepository.create({
      email: dto.email,
      name: dto.name,
      phone: dto.phone,
      password: hashPs,
    });
    return { msg: 'تم إنشاء حسابك بنجاح' };
  }

  async login(
    dto: UserLogin,
  ): Promise<{ msg: string; user: User; token: string }> {
    const isUserFound = await this.userRepository
      .scope('withoutTimeStamps')
      .findOne({
        where: { email: dto.email },
      });
    if (!isUserFound) {
      throw new ForbiddenException('الإيميل غير متاح');
    }
    const isMatch = await VerifyPassword(dto.password, isUserFound.password);
    if (!isMatch) {
      throw new ForbiddenException('كلمة المرور خاطئة');
    }
    const payload = { id: isUserFound.id, role: 'user' };
    const access_token = generateToken(payload);
    const { password, ...others } = isUserFound.toJSON();
    return { msg: 'تم تسجيل الدخول بنجاح', user: others, token: access_token };
  }
}
