import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BaseProductSchema } from './Schemas/baseProductSchema';
import { RecipeService } from './recipe/recipe.service';
import { RecipeController } from './recipe/recipe.controller';
import { IngredientService } from './ingredient/ingredient.service';
import { IngredientController } from './ingredient/ingredient.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'BaseProductModel', schema: BaseProductSchema }])],
  providers: [RecipeService, IngredientService],
  controllers: [RecipeController, IngredientController],
})
export class ProductWithDescModule {
}
