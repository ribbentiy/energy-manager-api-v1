import { Document, Types } from 'mongoose';
import { IBaseProduct } from '../../product-with-desc/interfaces/base-product.interface';

export interface IFridge extends Document {
  readonly users: [Types.ObjectId]
  readonly content: [{
    readonly product?: IBaseProduct;
    readonly amount?: number
  }]
}