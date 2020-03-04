import { Controller, Delete, Get, Param } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { IRecipe } from '../interfaces/recipe.interface';

@Controller('recipe')
export class RecipeController {
  constructor(private recipeService: RecipeService) {
  }

  @Get()
  getAllRecipes(): Promise<IRecipe[]> {
    return this.recipeService.getAllRecipes();
  }

  @Get('/:recipeId')
  getRecipeById(@Param('recipeId') recipeId: string): Promise<IRecipe> {
    return this.recipeService.getRecipeById(recipeId);
  }

  @Delete('/recipeId')
  deleteRecipe(@Param('recipeId') recipeId: string): Promise<void> {
    return this.recipeService.deleteRecipe(recipeId);
  }
}