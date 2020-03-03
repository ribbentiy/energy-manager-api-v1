import { IIngredient } from '../../interfaces/ingredient.interface';

export class CreateRecipeDto {
  readonly title: string;
  readonly description: string;
  weight?: number;
  // creator: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  products?: [
    {
      product?: IIngredient,
      amount?: number
    }
  ];
}