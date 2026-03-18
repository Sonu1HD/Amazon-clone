import DealsGrid from "../pages/DealsGrid";
import { getProducts } from "../services/productService.js";
import { Link } from "react-router-dom";
const ProductMiniCard = ({ product }) => (
  <Link to={`/product/${product._id}`} className="block">
  <div>
    <img
      src={product.image}
      alt={product.title}
      className="h-28 mx-auto object-contain"
    />
    <p className="text-sm mt-2 line-clamp-2">{product.title}</p>
    <p className="text-red-600 font-semibold">₹{product.price}</p>
  </div>
  </Link>
);

export default ProductMiniCard;
