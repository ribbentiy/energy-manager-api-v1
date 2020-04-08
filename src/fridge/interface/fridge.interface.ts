import { Document, Types } from 'mongoose';
import { IBaseProduct } from '../../base-product/interfaces/base-product.interface';

export interface IFridge extends Document {
  users: Types.ObjectId[]
  readonly content: [{
    readonly product: IBaseProduct;
    readonly amount: number
  }]
}
