import { forwardRef, Module } from '@nestjs/common';
import { FridgeService } from './fridge.service';
import { FridgeController } from './fridge.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FridgeSchema } from './schemas/fridge.schema';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Fridge', schema: FridgeSchema }]),
    forwardRef(() => UsersModule),
  ],
  providers: [FridgeService],
  controllers: [FridgeController],
  exports: [FridgeService],
})
export class FridgeModule {
}
