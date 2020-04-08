import * as mongoose from 'mongoose';
import { BaseProductSchema } from '../../base-product/schemas/baseProductSchema';

const FridgeSchema = new mongoose.Schema({
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserSchema',
  }],
  content: [{
    product: BaseProductSchema,
    amount: Number,
    _id: false,
  }]
  ,
});

export { FridgeSchema };
