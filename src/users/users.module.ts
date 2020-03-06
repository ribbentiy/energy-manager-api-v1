import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { FridgeModule } from '../fridge/fridge.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'devSecret',
      signOptions: {
        expiresIn: 604800,
      },
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    forwardRef(() => FridgeModule),
  ],
  providers: [
    JwtStrategy,
    UsersService,

  ],
  controllers: [UsersController],
  exports: [
    JwtStrategy,
    PassportModule,
  ],
})
export class UsersModule {
}
