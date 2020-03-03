import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IBaseProduct } from '../interfaces/base-product.interface';
import { IIngredient } from '../interfaces/ingredient.interface';
import { IngredientSchema } from '../Schemas/ingredient.schema';

@Injectable()
export class IngredientService {
  private readonly ingredientModel: Model<IIngredient>;

  constructor(@InjectModel('BaseProductModel') baseProductModel: Model<IBaseProduct>) {
    this.ingredientModel = baseProductModel.discriminator('Ingredient', IngredientSchema);
  }
}