import * as mongoose from 'mongoose';
import { isEmail } from 'validator';
import { BaseProductSchema } from '../../product-with-desc/Schemas/baseProductSchema';

const UserSchema = new mongoose.Schema();
UserSchema.add({
  //login: String,
  password: String,
  email: {
    type: String,
    required: true,
    validate: [
      val => isEmail(val),
      'Email should be valid email address',
    ],
    //index: true,
    unique: true,
  },

  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },
  //TODO Need to implement roles in user
  firstName: String,
  lastName: String,
  birthDate: Date,
  bodyWeight: Number,
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DishSchema',
  }],
  // fridge: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: FridgeSchema
  // },
  //TODO Fridge Schema
  recentDishes: [BaseProductSchema],
  recentProducts: [BaseProductSchema],
});


export { UserSchema };