import { Document, Types } from 'mongoose';
import { IDish } from '../../dishes/interfaces/dish.interface';
import { IProduct } from '../../products/interfaces/product.interface';

export interface IUser extends Document {
  /*
  //login: String,
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
  // fridge: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: FridgeSchema
  // },

  */
  readonly email: string,
  readonly password: string,
  readonly firstName: string,
  readonly lastName: string,
  readonly birthDate: Date,
  readonly bodyWeight: number,
  readonly recipes: [Types.ObjectId],
  readonly recentDishes: [IDish],
  readonly recentProducts: [IProduct]
}