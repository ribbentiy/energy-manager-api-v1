import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IRecipe } from '../interfaces/recipe.interface';
import { InjectModel } from '@nestjs/mongoose';
import { IBaseProduct } from '../interfaces/base-product.interface';
import { RecipeSchema } from '../Schemas/recipe.schema';

@Injectable()
export class RecipeService {
  private readonly recipeModel: Model<IRecipe>;

  constructor(@InjectModel('BaseProductModel') baseProductModel: Model<IBaseProduct>) {
    this.recipeModel = baseProductModel.discriminator('Recipe', RecipeSchema);
  }

  async getAllRecipes(): Promise<IRecipe[]> {
    return this.recipeModel.find();
  }
}