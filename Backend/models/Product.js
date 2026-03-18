import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true
    },
    description: {
      type: String
    },
    image: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      default: 0
    },
    countInStock: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
