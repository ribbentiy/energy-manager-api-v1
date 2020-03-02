import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { IDish } from './interfaces/dish.interface';
import { Types } from 'mongoose';
import { CreateDishDto } from './dto/create-dish.dto';

@Controller('dishes')
export class DishesController {
  constructor(private dishesService: DishesService) {
  }

  @Get()
  getAllDishes(): Promise<IDish[]> {
    return this.dishesService.getAllDishes();
  }

  @Get('/:dishId')
  getDishById(@Param('dishId') dishId: Types.ObjectId): Promise<IDish> {
    return this.dishesService.getDishById(dishId);
  }

  @Post()
  createDish(@Body() createDishDto: CreateDishDto): Promise<IDish> {
    return this.dishesService.createDish(createDishDto);
  }

  @Delete('/:dishId')
  deleteDish(@Param('dishId') dishId: Types.ObjectId): Promise<void> {
    return this.dishesService.deleteDish(dishId);
  }
}
