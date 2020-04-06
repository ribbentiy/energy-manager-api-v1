import * as mongoose from 'mongoose';

const BaseProductSchema = new mongoose.Schema({
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
  weight: Number,
}, { discriminatorKey: 'kind' });

BaseProductSchema.index({ title: 'text' });

export { BaseProductSchema };