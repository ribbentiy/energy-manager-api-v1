import { Module } from '@nestjs/common';
import { FridgeService } from './fridge.service';
import { FridgeController } from './fridge.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FridgeSchema } from './schemas/fridge.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Fridge', schema: FridgeSchema }])],
  providers: [FridgeService],
  controllers: [FridgeController],
})
export class FridgeModule {
}
