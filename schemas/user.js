import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  mail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.model('users', userSchema);
