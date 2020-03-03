import { Controller, Get } from '@nestjs/common';
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
}