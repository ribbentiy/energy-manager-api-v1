import {
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { IAuth } from './interfaces/auth.interface';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { JwtPayloadInterface } from './interfaces/jwt-payload.interface';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Auth') private readonly authModel: Model<IAuth>,
    private jwtService: JwtService,
    @Inject(forwardRef(() => UserService)) private userService: UserService,
  ) {
  }

  async signup(authCredentialDto: AuthCredentialDto): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialDto;
    try {

      const salt = await bcrypt.genSalt();
      const newUser = new this.authModel();
      newUser.email = email;
      newUser.salt = salt;
      newUser.password = await AuthService.hashPassword(password, salt);
      const profile = await this.userService.createUser();
      console.log(profile);
      newUser.profile = profile._id;
      await newUser.save();
      const payload: JwtPayloadInterface = { email: newUser.email };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('User with this email is already exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signin(authCredentialDto: AuthCredentialDto): Promise<{ accessToken: string }> {
    const result = await this.validateUser(authCredentialDto);
    if (!result) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload: JwtPayloadInterface = { email: result.email };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken };
  }

  private async validateUser(authCredentialDto: AuthCredentialDto): Promise<IAuth> {
    const { email, password } = authCredentialDto;
    const user = await this.authModel.findOne({ email });
    if (user) {
      const hash = await AuthService.hashPassword(password, user.salt);
      if (user.password === hash) {
        return user;
      }
    }
    return null;
  }

  private static async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}
