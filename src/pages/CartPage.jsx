import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
    const { state, dispatch } = useCart();
    //   const {inCreaseQunatity, setInCreaseQunatity} = useState(1);
    const { cartItems } = state;

    return (
        <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-8">

            {/* LEFT: CART ITEMS */}
            <div className="md:col-span-8">
                <h1 className="text-2xl font-semibold mb-4">
                    Shopping Cart
                </h1>

                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map((item) => (
                        <div
                            key={item._id}
                            className="flex gap-4 border-b py-4"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-24 h-24 object-contain"
                            />

                            <div className="flex-1 hover:cursor-pointer">
                                <Link
                                    to={`/product/${item._id}`}
                                    className="font-semibold hover:text-blue-600"
                                >
                                    {item.title}
                                </Link>

                                <p className="text-red-700 font-bold mt-1">
                                    ₹{item.price}
                                </p>

                                {/* QUANTITY CONTROLS (NEXT PART) */}
                                <div className="flex items-center gap-3 mt-2">
                                    <button
                                        onClick={() =>
                                            dispatch({
                                                type: "DECREASE_QTY",
                                                payload: item._id,
                                            })
                                        }
                                        className="border px-2"
                                    >
                                        -
                                    </button>

                                    <span>{item.qty}</span>

                                    <button
                                        onClick={() =>
                                            dispatch({
                                                type: "INCREASE_QTY",
                                                payload: item._id,
                                            })
                                        }
                                        className="border px-2"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: item._id,
                                        })
                                    }
                                    className="text-sm text-blue-600 mt-2"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* RIGHT: SUMMARY */}
            <div className="md:col-span-4">
                <div className="border p-4 rounded bg-white sticky top-24">
                    <h2 className="text-lg font-semibold mb-4">
                        Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    </h2>

                    <p className="text-xl font-bold mb-4">
                        ₹
                        {cartItems.reduce(
                            (a, c) => a + c.price * c.qty,
                            0
                        )}
                    </p>

                    <button className="w-full bg-yellow-400 py-2 rounded hover:bg-yellow-500">
                        Proceed to Buy
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CartPage;
