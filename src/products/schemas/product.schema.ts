import * as mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    readonly: true,
  },
  nutrition: {
    calories: Number,
    proteins: Number,
    carbohydrates: Number,
    fats: Number,
  },
  eanCode: {
    type: String,
    readonly: true,
  },
  weight: Number,
});

ProductSchema.index({ title: 'text' });

export { ProductSchema };