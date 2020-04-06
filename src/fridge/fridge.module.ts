import { forwardRef, Module } from '@nestjs/common';
import { FridgeService } from './fridge.service';
import { FridgeController } from './fridge.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FridgeSchema } from './schemas/fridge.schema';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Fridge', schema: FridgeSchema }]),
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
  ],
  providers: [FridgeService],
  controllers: [FridgeController],
  exports: [FridgeService],
})
export class FridgeModule {
}
