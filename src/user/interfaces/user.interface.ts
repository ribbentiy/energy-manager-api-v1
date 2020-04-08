import { Document, Types } from 'mongoose';
import { IRecipe } from '../../base-product/interfaces/recipe.interface';
import { IIngredient } from '../../base-product/interfaces/ingredient.interface';

export interface IUser extends Document {
  /*
  //login: String,
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },

  */

  fridge: Types.ObjectId,
  readonly firstName?: string,
  readonly lastName?: string,
  readonly birthDate?: Date,
  readonly bodyWeight?: number,
  readonly recipes?: Types.ObjectId[],
  readonly recentDishes?: IRecipe[],
  readonly recentProducts?: IIngredient[]
}
