import { Document } from 'mongoose';
import { INutrition } from './nutrition.interface';


export interface IIngredient extends Document {
  readonly title: string,
  readonly nutrition: INutrition,
  readonly eanCode: string,
  readonly weight: number
}
