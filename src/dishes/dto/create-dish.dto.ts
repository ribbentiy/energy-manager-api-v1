import { Types } from 'mongoose';

export class CreateDishDto {
  readonly title: string;
  readonly description: string;
  weight?: number;
  // creator: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  products?: [
    {
      product?: Types.ObjectId,
      amount?: number
    }
  ];
}