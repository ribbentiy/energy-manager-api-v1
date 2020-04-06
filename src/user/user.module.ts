import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';
import { FridgeModule } from '../fridge/fridge.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    forwardRef(() => FridgeModule),
  ],
  providers: [
    UserService,
  ],
  controllers: [UserController],
  exports: [
    UserService,
  ],
})
export class UserModule {
}
