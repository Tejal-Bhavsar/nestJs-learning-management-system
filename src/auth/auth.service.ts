import { Injectable } from '@nestjs/common';
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';

@Injectable()
export class AuthService {
    constructor(private readonly UserService: UserService) {

    }
    registerUser(registerUserDto: RegisterDto) {
        console.log(registerUserDto, 'reg')
        //logic for register user will be here
        // 1 check if email exist already
        // 2 hash the password
        // 3 save the user in database
        // 4 generate jwt ParamsTokenFactory
        // 5 send token in response
        return this.UserService.createUser()
    }

}
