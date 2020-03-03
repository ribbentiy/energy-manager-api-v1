import * as mongoose from 'mongoose';
import { ProductSchema } from '../../products/schemas/product.schema';
import { UserSchema } from '../../users/schemas/user.schema';

const DishSchema = new mongoose.Schema({
  title: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
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
    ref: UserSchema,
  },
  products: [
    {
      product: {
        type: ProductSchema,
      },
      amount: Number,
      _id: false,
    },
  ],
}, { timestamps: true });

DishSchema.index({ title: 'text', description: 'text' });

export { DishSchema };