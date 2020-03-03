import { Document, Types } from 'mongoose';
import { INutrition } from '../../products/interfaces/nutrition.interface';
import { IProduct } from '../../products/interfaces/product.interface';

export interface IDish extends Document {
  readonly title: string,
  readonly description: string,
  readonly nutrition: INutrition,
  readonly weight: number,
  readonly creator: Types.ObjectId,
  readonly products: [IProduct],
  readonly createdAt: Date,
  readonly updatedAt: Date
}