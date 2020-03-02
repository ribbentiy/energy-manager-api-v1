import { Document } from 'mongoose';


export interface IProduct extends Document {
  readonly title: string,
  nutrition: {
    readonly calories: number,
    readonly proteins: number,
    readonly carbohydrates: number,
    readonly fats: number
  },
  readonly eanCode: string,
  readonly weight: number
}