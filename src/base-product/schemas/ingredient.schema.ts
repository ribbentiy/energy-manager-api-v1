import * as mongoose from 'mongoose';

const IngredientSchema = new mongoose.Schema({
  eanCode: {
    type: String,
    //TODO need to validate
  },
}, { discriminatorKey: 'kind' });

export { IngredientSchema };