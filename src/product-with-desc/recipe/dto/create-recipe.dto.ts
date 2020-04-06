import { IIngredient } from '../../interfaces/ingredient.interface';
import * as mongoose from 'mongoose';

export class CreateRecipeDto {
  readonly title: string;
  readonly description: string;
  weight?: number;
  creator: mongoose.Types.ObjectId;
  products?: [
    {
      product?: IIngredient,
      amount?: number
    }
  ];
}
