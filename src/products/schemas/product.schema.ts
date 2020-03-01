import * as mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    lowercase: true,
    trim: true,

  },
  nutrition: {
    calories: Number,
    proteins: Number,
    carbohydrates: Number,
    fats: Number,
  },
  eanCode: String,
  weight: Number,
});

ProductSchema.index({ title: 'text' });

export { ProductSchema };