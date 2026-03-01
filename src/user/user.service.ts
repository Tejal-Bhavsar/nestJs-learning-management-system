import { ConflictException, Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private useModel: Model<User>) { }

    async createUser(registerUserDto: RegisterDto) {
        try {
            return await this.useModel.create({
                fname: registerUserDto.fname,
                lname: registerUserDto.lname,
                email: registerUserDto.email,
                password: registerUserDto.password,
            })
        }
        catch (err: unknown) {
            const e = err as { code?: number }

            const DUPLICATE_KEY_ERROR = 11000
            if (e.code === DUPLICATE_KEY_ERROR) {
                throw new ConflictException('Email already exists')
            }
            throw err
        }

    }
}
