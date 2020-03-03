import { Document, Types } from 'mongoose';
import { INutrition } from './nutrition.interface';
import { IIngredient } from './ingredient.interface';

export interface IRecipe extends Document {
  readonly title: string,
  readonly description: string,
  readonly nutrition: INutrition,
  readonly weight: number,
  readonly creator: Types.ObjectId,
  readonly products: [IIngredient],
  readonly createdAt: Date,
  readonly updatedAt: Date
}