import mongoose from 'mongoose';
import exp from 'constants';

const connectToDB: Function = async (callback: Function) => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}`);
    callback();
  } catch (err) {
    callback(err);
  }
};

export default connectToDB;
