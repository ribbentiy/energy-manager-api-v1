import { Document } from 'mongoose';
import { INutrition } from './nutrition.interface';


export interface IProduct extends Document {
  readonly title: string,
  readonly nutrition: INutrition,
  readonly eanCode: string,
  readonly weight: number
}