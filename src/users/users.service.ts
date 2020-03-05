import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {
  }

  async signUp(authCredentialsDto: AuthCredentialDto): Promise<void> {
    const { email, password } = authCredentialsDto;

    const salt = await bcrypt.genSalt();
    const newUser = new this.userModel();

    newUser.email = email;
    newUser.salt = salt;
    newUser.password = await UsersService.hashPassword(password, salt);

    try {
      await newUser.save();
    } catch (e) {
      if (e.code === 11000) {
        throw new ConflictException('User with this email is already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }

  }

  async signIn(authCredentialsDto: AuthCredentialDto): Promise<IUser> {
    const result = await this.validateUser(authCredentialsDto);
    console.log(result);
    if (!result) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return result;
  }

  private async validateUser(authCredentialsDto: AuthCredentialDto): Promise<IUser> {
    const { email, password } = authCredentialsDto;
    const user = await this.userModel.findOne({ email });
    const hash = await bcrypt.hash(password, user.salt);
    if (user.password === hash) {
      return user;
    } else {
      return null;
    }
  }

  private static async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
