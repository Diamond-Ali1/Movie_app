import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//user interface
interface iUser {
  username: string;
  password: string;
}

const userSchema = new Schema<iUser>({
  username: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'string',
    required: true,
  },
}, {timestamps:true});

const users = mongoose.model<iUser>('user', userSchema);
export default users;
