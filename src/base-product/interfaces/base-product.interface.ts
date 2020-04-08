import { Document } from 'mongoose';
import { INutrition } from './nutrition.interface';

export interface IBaseProduct extends Document {
  readonly title: string,
  readonly nutrition: INutrition,
  readonly weight: number,
}