import * as mongoose from 'mongoose';
import { ProductSchema } from '../../products/schemas/product.schema';
import { DishSchema } from '../../dishes/schemas/dish.schema';

const FridgeSchema = new mongoose.Schema({
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserSchema',
  }],
  content: {
    products: [{
      product: ProductSchema,
      amount: Number,
    }],
    dishes: [{
      dish: DishSchema,
      amount: Number,
    }],
  },
});

export { FridgeSchema };