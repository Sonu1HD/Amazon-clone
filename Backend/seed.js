import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import products from "./data/products.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URL);

const importData = async () => {
  await Product.deleteMany();
  await Product.insertMany(products);
  console.log("Products Imported");
  process.exit();
};

importData();
