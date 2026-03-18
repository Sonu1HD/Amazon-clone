import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://amazon-clone-0qb5.onrender.com/api/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-8">

      {/* LEFT: IMAGE */}
      <div className="md:col-span-4 bg-white p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />
      </div>

      {/* MIDDLE: INFO */}
      <div className="md:col-span-5">
        <h1 className="text-2xl font-medium mb-2">
          {product.description}
        </h1>

        <div className="flex items-center text-sm mb-4">
          <span className="text-yellow-500 mr-2">
            {"⭐".repeat(Math.round(product.rating || 0))}
          </span>
          <span className="text-blue-600 cursor-pointer">
            {product.rating} ratings
          </span>
        </div>

        <hr className="mb-4" />
        <span className="text-white bg-red-600 rounded-lg p-1 text-sm">Limited  time deal</span>

        <p className="text-3xl text-red-700 mb-4">
          ₹{product.price}
        </p>

        <p className="text-sm text-gray-700 mb-4">
          {product.title}
        </p>

        <ul className="text-sm list-disc ml-4 text-gray-700">
          <li>Fast delivery available</li>
          <li>7-day replacement policy</li>
          <li>Amazon fulfilled</li>
        </ul>

        <div className="offers flex flex-col items-start gap-2 mt-4">
          <span>
            <img className="w-25" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu764H5aKwwEVOTW400wZU_UAgL2xeqxWY-Q&s" alt="logos" />
          </span>
          <h2 className="font-bold">offers</h2>
          <ul className="list-dise flex gap-4 overflow-x-auto scrollbar-hide">
            <li className="bg-white shadow-2xl p-3 rounded w-full">
              <h1>CashBack</h1>
              <p>Upon 38% discount using amazon pay</p>
              <a className="text-blue-500" href="#">1 offer</a>
            </li>
            <li className="bg-white shadow p-3 rounded w-full">
              <h1>Bank offer</h1>
              <p>Upon 38% discount using amazon pay</p>
              <a className="text-blue-500" href="#">36 offer</a>
            </li>
            <li className="bg-white shadow p-3 rounded w-full">
              <h1>Bank offer</h1>
              <p>Upon 38% discount using amazon pay</p>
              <a className="text-blue-500" href="#">23 offer</a>
            </li>
          </ul>
        </div>
      </div>

      {/* RIGHT: BUY BOX */}
      <div className="md:col-span-3">
        <div className="border p-4 rounded bg-white sticky top-24">
          <p className="text-xl text-red-700 font-semibold mb-2">
            ₹{product.price}
          </p>

          <p className="text-sm mb-2">
            FREE delivery <span className="font-semibold">Tomorrow</span>
          </p>

          <div className="text-sm ml-4">
            <span className="font-light text-blue-500">Deliver to New Delhi 110043</span><br />
            📍 <span className="font-bold text-blue-500">Update location</span>
          </div>

          <p className="mb-4">
            Status:{" "}
            {product.countInStock > 0 ? (
              <span className="text-green-600 font-semibold">
                In Stock
              </span>
            ) : (
              <span className="text-red-600 font-semibold">
                Out of Stock
              </span>
            )}
          </p>

          <button
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: product })
            }
            className="mt-2 w-full mb-3 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold py-1 rounded"
          >
            Add to Cart
          </button>

          <button className="w-full bg-orange-400 py-2 rounded hover:bg-orange-500">
            Buy Now
          </button>
          <input type="checkbox" name="" id="" /> Add gift option
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
