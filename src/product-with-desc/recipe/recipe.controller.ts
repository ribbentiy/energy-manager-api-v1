import { Body, Controller, Delete, Get, Param, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { IRecipe } from '../interfaces/recipe.interface';
import { AuthGuard } from '@nestjs/passport';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { GetUser } from '../../auth/get-user.decorator';
import { IAuth } from '../../auth/interfaces/auth.interface';

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

  @Post('/')
  @UseGuards(AuthGuard())
  createRecipe(@Body(ValidationPipe) createRecipeDto: CreateRecipeDto, @GetUser() auth: IAuth): Promise<IRecipe> {
    return this.recipeService.createRecipe(createRecipeDto, auth);
  }

  @Delete('/recipeId')
  deleteRecipe(@Param('recipeId') recipeId: string): Promise<void> {
    return this.recipeService.deleteRecipe(recipeId);
  }
}
