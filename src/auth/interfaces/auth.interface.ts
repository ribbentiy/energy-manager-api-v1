import { Document, Types } from 'mongoose';

export interface IAuth extends Document {
  email: string,
  password: string,
  salt: string,
  profile: Types.ObjectId
}
