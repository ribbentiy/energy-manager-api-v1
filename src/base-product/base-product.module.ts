import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BaseProductSchema } from './schemas/baseProductSchema';
import { RecipeService } from './recipe/recipe.service';
import { RecipeController } from './recipe/recipe.controller';
import { IngredientService } from './ingredient/ingredient.service';
import { IngredientController } from './ingredient/ingredient.controller';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';
import { BaseProductController } from './base-product.controller';
import { BaseProductService } from './base-product.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'BaseProductModel', schema: BaseProductSchema }]),
    UserModule,
    AuthModule,
  ],
  providers: [RecipeService, IngredientService, BaseProductService],
  controllers: [RecipeController, IngredientController, BaseProductController],
})
export class BaseProductModule {
}
