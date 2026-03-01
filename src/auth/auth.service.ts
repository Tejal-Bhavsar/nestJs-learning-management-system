import { Injectable } from '@nestjs/common';
import { ParamsTokenFactory } from '@nestjs/core/pipes';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private readonly UserService: UserService) {

    }
    async registerUser(registerUserDto: RegisterDto) {
        console.log(registerUserDto, 'reg')

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(registerUserDto.password, saltRounds);
        //logic for register user will be here
        // 1 check if email exist already
        // 2 hash the password
        // 3 save the user in database
        // 4 generate jwt ParamsTokenFactory
        // 5 send token in response
        const user = await this.UserService.createUser({ ...registerUserDto, password: hashedPassword })
        return {}
    }

}
