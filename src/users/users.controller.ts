import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { IUser } from './interfaces/user.interface';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialDto): Promise<void> {
    return this.usersService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body() authCredentialsDto: AuthCredentialDto): Promise<IUser> {
    return this.usersService.signIn(authCredentialsDto);
  }
}
