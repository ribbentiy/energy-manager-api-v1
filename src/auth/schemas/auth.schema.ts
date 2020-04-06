import * as mongoose from 'mongoose';


const AuthSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: String,
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserSchema',
  },
});

export { AuthSchema };
