import * as mongoose from 'mongoose';
import { BaseProductSchema } from '../../product-with-desc/schemas/baseProductSchema';

const UserSchema = new mongoose.Schema();
UserSchema.add({
  //login: String,
  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
  //TODO Need to implement roles in user
  //TODO Need to implement confirmation of sharing fridge with someone

  firstName: String,
  lastName: String,
  birthDate: Date,
  bodyWeight: Number,
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DishSchema',
  }],
  fridge: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FridgeSchema',
  },
  recentDishes: [BaseProductSchema],
  recentProducts: [BaseProductSchema],
});


export { UserSchema };
