import { Body, Controller, Delete, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IIngredient } from '../interfaces/ingredient.interface';
import { CreateIngredientDto } from './dto/create-ingredient.dto';

@Controller('ingredients')
export class IngredientController {
  constructor(private ingredientService: IngredientService) {
  }

  @Get('/')
  getAllIngredients(): Promise<IIngredient[]> {
    return this.ingredientService.getAllIngredients();
  }

  @Get('/:id')
  getIngredientById(@Param('id') id: string): Promise<IIngredient> {
    return this.ingredientService.getIngredientById(id);
  }

  @Post('/')
  //TODO need to use auth guard to create ingredient
  addIngredient(@Body(ValidationPipe) createIngredientDto: CreateIngredientDto): Promise<IIngredient> {
    return this.ingredientService.createIngredient(createIngredientDto);
  }

  @Delete('/:id')
  //TODO delete ingredients can only admins
  deleteIngredient(@Param('id') id: string): Promise<void> {
    return this.ingredientService.deleteIngredient(id);
  }
}
