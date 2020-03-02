import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IDish } from './interfaces/dish.interface';
import { CreateDishDto } from './dto/create-dish.dto';

@Injectable()
export class DishesService {
  constructor(@InjectModel('Dish') private readonly dishModel: Model<IDish>) {
  }

  async getAllDishes(): Promise<IDish[]> {
    return this.dishModel.find();
  }

  async getDishById(dishId: Types.ObjectId): Promise<IDish> {
    const dish = await this.dishModel.findById(dishId);
    if (!dish) {
      throw new NotFoundException();
    }
    return dish;
  }

  async createDish(createDishDto: CreateDishDto): Promise<IDish> {
    const newDish = new this.dishModel(createDishDto);
    return newDish.save();
  }

  async deleteDish(dishId: Types.ObjectId): Promise<void> {
    const product = await this.dishModel.findByIdAndDelete(dishId);
    if (!product) {
      throw new NotFoundException();
    }
    return;
  }
}
