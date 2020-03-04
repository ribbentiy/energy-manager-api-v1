import { Controller, Delete, Get, Param } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IIngredient } from '../interfaces/ingredient.interface';

@Controller('ingredient')
export class IngredientController {
  constructor(private ingredientService: IngredientService) {
  }

  @Get()
  getAllIngridients(): Promise<IIngredient[]> {
    return this.ingredientService.getAllIngredients();
  }

  //TODO need to validate id to be ObjectId

  @Get('/:id')
  getIngredientById(@Param('id') id: string): Promise<IIngredient> {
    return this.ingredientService.getIngredientById(id);
  }

  @Delete('/:id')
  deleteIngredient(@Param('id') id: string): Promise<void> {
    return this.ingredientService.deleteIngredient(id);
  }
}