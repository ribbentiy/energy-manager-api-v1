import * as mongoose from 'mongoose';

const DishSchema = new mongoose.Schema({
  title: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    readonly: true,
    text: true,
  },
  description: {
    type: String,
    text: true,
  },
  nutrition: {
    calories: Number,
    proteins: Number,
    carbohydrates: Number,
    fats: Number,
  },
  weight: Number,
  // creator: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
      },
      amount: Number,
    },
  ],
});

export { DishSchema };