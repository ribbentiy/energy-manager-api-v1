import { Document, Types } from 'mongoose';
import { IRecipe } from '../../product-with-desc/interfaces/recipe.interface';
import { IIngredient } from '../../product-with-desc/interfaces/ingredient.interface';

export interface IUser extends Document {
  /*
  //login: String,
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
  // fridge: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: FridgeSchema
  // },

  */
  //TODO Add fridge to user interface

  email: string,
  password: string,
  salt: string,
  fridge: Types.ObjectId,
  readonly firstName?: string,
  readonly lastName?: string,
  readonly birthDate?: Date,
  readonly bodyWeight?: number,
  readonly recipes?: [Types.ObjectId],
  readonly recentDishes?: [IRecipe],
  readonly recentProducts?: [IIngredient]
}