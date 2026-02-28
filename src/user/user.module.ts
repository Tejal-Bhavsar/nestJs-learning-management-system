import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthController } from 'src/auth/auth.controller';

@Module({
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
