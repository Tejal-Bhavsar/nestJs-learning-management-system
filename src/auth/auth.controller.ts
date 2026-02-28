import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registerUser.dto';

@Controller('auth')// auth here is a prefix for all the routes the end point is /auth/register
export class AuthController {
    constructor(private readonly authService: AuthService) { }
    @Post('register')
    register(@Body() registerUserDto: RegisterDto) {
        //logic to register a user will be in auth.service.ts as controllers is only for handling the requests and responses
        // console.log(registerUserDto)
        const result = this.authService.registerUser(registerUserDto)
        return result
    }
}
