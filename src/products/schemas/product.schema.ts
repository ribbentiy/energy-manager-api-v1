import * as mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    readonly: true,
    index: 'text',
  },
  nutrition: {
    calories: Number,
    proteins: Number,
    carbohydrates: Number,
    fats: Number,
  },
  eanCode: {
    type: String,
    //TODO need to validate ean
  },
  weight: Number,
});


export { ProductSchema };