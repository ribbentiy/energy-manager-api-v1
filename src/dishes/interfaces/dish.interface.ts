import { Document, Types } from 'mongoose';

export interface IDish extends Document {
  readonly _id: Types.ObjectId,
  readonly title: string,
  readonly description: string,
  readonly nutrition: {
    calories: number,
    proteins: number,
    carbohydrates: number,
    fats: number,
  },
  readonly weight: number,
  // creator: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  readonly products: [
    {
      product: Types.ObjectId,
      amount: number
    }
  ],
  createdAt: Date,
  updatedAt: Date
}