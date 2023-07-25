import mongoose from 'mongoose';

const connectDB = (url) => {
  // for the search functionality

  mongoose.set('strictQuery', true);

  // connect db
  mongoose.connect(url)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;
