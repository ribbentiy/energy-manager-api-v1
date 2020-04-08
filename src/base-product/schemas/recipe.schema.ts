import * as mongoose from 'mongoose';
import { BaseProductSchema } from './baseProductSchema';

const RecipeSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserSchema',
  },
  products: [
    {
      product: BaseProductSchema,
      amount: Number,
      _id: false,
    },
  ],
}, { discriminatorKey: 'kind' });


export { RecipeSchema };