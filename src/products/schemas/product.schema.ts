import mongoose, { Schema } from 'mongoose';
import { ProductInterface } from '../interfaces/product.interface';


const ProductSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    text: true,
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


export default mongoose.model<ProductInterface>('Product', ProductSchema);