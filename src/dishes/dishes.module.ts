import { Module } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { DishesController } from './dishes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DishSchema } from './schemas/dish.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Dish', schema: DishSchema }])],
  providers: [DishesService],
  controllers: [DishesController],
})
export class DishesModule {
}
