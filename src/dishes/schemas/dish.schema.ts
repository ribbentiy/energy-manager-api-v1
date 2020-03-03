import * as mongoose from 'mongoose';
import { ProductSchema } from '../../products/schemas/product.schema';
import { UserSchema } from '../../users/schemas/user.schema';

const DishSchema = new mongoose.Schema({}, { timestamps: true });
DishSchema.add({
  title: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    index: 'text',
  },
  description: {
    type: String,
  },
  nutrition: {
    calories: Number,
    proteins: Number,
    carbohydrates: Number,
    fats: Number,
  },
  weight: Number,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserSchema',
  },
  products: [
    {
      product: ProductSchema,
      amount: Number,
      _id: false,
    },
  ],
});


export { DishSchema };