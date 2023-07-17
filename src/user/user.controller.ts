import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLogin, UserSignup } from './dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  Signup(@Body() dto: UserSignup) {
    return this.userService.signup(dto);
  }

  @Post('/login')
  Login(@Body() dto: UserLogin) {
    return this.userService.login(dto);
  }
}
