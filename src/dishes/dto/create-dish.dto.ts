import { IProduct } from '../../products/interfaces/product.interface';

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
      product?: IProduct,
      amount?: number
    }
  ];
}