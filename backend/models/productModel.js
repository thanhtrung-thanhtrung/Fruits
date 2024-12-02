import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: [String], required: true },
  description: { type: String, required: true },
  sizes: { type: [String], required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  available: { type: Boolean, default: true },
  bestseller: { type: Boolean, default: false },
  type: { type: String, required: true },
});
const productModle =
  mongoose.models.product || mongoose.model("product", productSchema);
export default productModle;
