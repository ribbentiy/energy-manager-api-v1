import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IBaseProduct } from '../interfaces/base-product.interface';
import { IIngredient } from '../interfaces/ingredient.interface';
import { IngredientSchema } from '../schemas/ingredient.schema';
import { CreateIngredientDto } from '../dto/create-ingredient.dto';

@Injectable()
export class IngredientService {
  private readonly ingredientModel: Model<IIngredient>;

  constructor(@InjectModel('BaseProductModel') baseProductModel: Model<IBaseProduct>) {
    this.ingredientModel = baseProductModel.discriminator('ingredient', IngredientSchema);
  }

  async getIngredientByEan(ean: string): Promise<IIngredient[]> {
    return this.ingredientModel.find({ eanCode: ean });
  }

  async createIngredient(createIngredientDto: CreateIngredientDto): Promise<IIngredient> {
    //TODO need to moderate published products
    const ingredient = new this.ingredientModel(createIngredientDto);
    console.log(ingredient);
    await ingredient.save();
    return ingredient;
  }

  //TODO need to implement Update func

  async deleteIngredient(id: string): Promise<void> {
    const delIngredient = await this.ingredientModel.findByIdAndDelete(id);
    if (!delIngredient) {
      throw new NotFoundException();
    }
  }


}
