import mongoose from 'mongoose';

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
      enum: ['dog','cat','rabit']
    },
    breed: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      min: [0, 'Age cannot be negative'],
      max: [30, 'Age seems to be wrong'],
    },
    description: {
      type: String,
    },
    adopted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true}
);

export default mongoose.model('pets', petSchema);
