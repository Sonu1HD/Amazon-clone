import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts } from "../services/productService";
import { categoryMap } from "../utils/categoryMap";
import { useCart } from "../context/CartContext";


const CategoryPage = () => {
    const { name } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { dispatch } = useCart();

    const backendCategory = categoryMap[name] || name;
    useEffect(() => {
        const fetchCategoryProducts = async () => {
            const data = await getProducts();

            

            const filtered = data.filter(
                (p) => p.category?.toLowerCase() === backendCategory.toLowerCase()
            );

            setProducts(filtered);
            setLoading(false);
        };

        fetchCategoryProducts();
    }, [name, backendCategory]);

    const getTextFromCategory = (category) => {
        switch (category) {
            case "Electronics":
                return "1–12 of over 80,000 results for";
            case "Winter":
                return "1–12 of over 10,000 results for";
            case "Fashion":
                return "1–12 of over 40,000 results for";
            case "Home":
                return "1–12 of over 25,000 results for";
            default:
                return "Results for";
        }
    }

    return (
        <div className="bg-gray-100  min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <h1 className="text-xl font-bold capitalize mb-6">
                    {name} Deals
                </h1>

                <span className="border rounded-xl p-5 mb-10 inline-block">
                    {getTextFromCategory(backendCategory)}{" "}
                    <span className="text-red-600">{backendCategory}</span>
                </span>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="grid grid-cols-2 mt-10 md:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <Link
                                to={`/product/${product._id}`}
                                key={product._id}
                                className="bg-white rounded p-3 hover:shadow-lg transition"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="h-40 w-full object-contain"
                                />
                                <span className="inline-block mt-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm">
                                    Limited time deal
                                </span>
                                <h3 className="text-sm font-semibold mt-2">
                                    {product.title}
                                </h3>
                                <p className="text-lg font-bold">₹{product.price}</p>
                                <button
                                    onClick={() =>
                                        dispatch({ type: "ADD_TO_CART", payload: product })
                                    }
                                    className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-sm font-semibold py-1 rounded-2xl w-10 "
                                >
                                    +
                                </button>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
