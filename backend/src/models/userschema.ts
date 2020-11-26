import { Document, Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  username: String,
  created: { type: Date, default: Date.now },
});

interface IUserSchema extends Document {
  email: string;
  username: string;
}

export type IUser = IUserSchema;

export default model<IUser>('user', userSchema);
