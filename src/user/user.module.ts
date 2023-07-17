import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { userRepositry } from 'src/constants/entityRepositry';

@Module({
  providers: [
    {
      provide: userRepositry,
      useValue: User,
    },
    UserService,
  ],
  controllers: [UserController],
  exports: [userRepositry],
})
export class UserModule {}
