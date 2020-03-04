import { Injectable, NotFoundException } from '@nestjs/common';
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

  async getRecipeById(recipeId: string): Promise<IRecipe> {
    const recipe = await this.recipeModel.findById(recipeId);
    if (!recipe) {
      throw new NotFoundException();
    }
    return recipe;
  }

  //TODO Need to implement Create And Update func

  async deleteRecipe(recipeId: string): Promise<void> {
    const deletedRecipe = await this.recipeModel.findByIdAndDelete(recipeId);
    if (!deletedRecipe) {
      throw new NotFoundException();
    }
  }
}