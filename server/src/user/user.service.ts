import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { UserRegisterDto } from './dto/registerUserDto';
import { comparePassword } from 'utils/password';
import { UserLoginDto } from './dto/loginUserDto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}
  async userRegister(userRegisterDto: UserRegisterDto) {
    const existedUser = await this.userModel.findOne({
      email: userRegisterDto.email,
    });
    if (existedUser) {
      throw new BadRequestException('Email already exists');
    }
    const newUser = await this.userModel.create({
      ...userRegisterDto,
    });
    if (!newUser) {
      throw new InternalServerErrorException('User is not registered');
    }
    const user = {
      name: newUser.name,
      id: newUser._id,
      email: newUser.email,
    };
    return user;
  }

  async userLogin(userLoginDto: UserLoginDto) {
    const { email, password } = userLoginDto;
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const isPasswordMatch = await comparePassword(password, user.password);
    if (!isPasswordMatch) {
      throw new BadRequestException('Invalid password');
    }
    return user;
  }
  async currentUser(userId: string) {
    const user = await this.userModel.findById(userId).select('-password');
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
