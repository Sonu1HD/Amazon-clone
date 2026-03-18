import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const { state } = useCart();

  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const fetchResults = async () => {
      const res = await fetch(
        `http://localhost:3000/api/products?keyword=${searchTerm}`
      );
      const data = await res.json();
      setResults(data);
      setShowResults(true);
    };

    const debounce = setTimeout(fetchResults, 300);
    return () => clearTimeout(debounce);
  }, [searchTerm]);

  return (
    <nav className="bg-gray-900 text-white px-4 py-2 flex items-center text-sm justify-between sticky top-0 z-50">

      {/* Logo */}
      <Link
        to="/"
        onClick={() => {
          setSearchTerm("");
          setShowResults(false);
        }}
        className="flex items-center hover:border-2"
      >
        <img
          src="https://www.pngmart.com/files/23/Amazon-White-Logo-PNG.png"
          alt="Amazon"
          className="w-24 h-8 object-contain"
        />
        <span className="text-xs ml-1">.in</span>
      </Link>

      {/* Location */}
      <div className="text-sm hidden md:block hover:border-2 ml-4">
        <span className="font-light text-gray-300">Deliver to New Delhi 110043</span><br />
        📍 <span className="font-bold">Update location</span>
      </div>

      {/* 🔍 SEARCH */}
      <div className="flex-1 mx-4 max-w-2xl relative">
        <div className="flex">
          <button className="bg-gray-300 text-black text-sm px-4 rounded-l-md">
            All
          </button>

          <input
            type="text"
            placeholder="Search Amazon"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 text-black bg-white focus:outline-none"
          />

          <button className="bg-yellow-400 text-black px-4 rounded-r-md font-semibold">
            🔍
          </button>
        </div>

        {/* 🔽 SEARCH RESULTS DROPDOWN */}
        {showResults && (
          <div className="absolute top-full left-0 right-0 bg-white text-black shadow-xl z-50 max-h-96 overflow-y-auto">

            {results.length === 0 ? (
              <p className="p-4 text-gray-500">No results found</p>
            ) : (
              results.slice(0, 8).map(product => (
                <Link
                  key={product._id}
                  to={`/product/${product._id}`}
                  onClick={() => {
                    setSearchTerm("");
                    setShowResults(false);
                  }}
                  className="flex items-center gap-3 p-3 hover:bg-gray-100 border-b"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-12 w-12 object-contain"
                  />
                  <div>
                    <p className="text-sm font-medium line-clamp-1">
                      {product.title}
                    </p>
                    <p className="text-sm text-red-600">
                      ₹{product.price}
                    </p>
                  </div>
                </Link>
              ))
            )}

          </div>
        )}
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <span className="flex items-center hover:border-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/206/206606.png"
            alt="Indian Flag"
            className="w-6 h-6"
          />
          EN
        </span>

        <Link
          to="/login"
          className="hover:border-2 font-bold cursor-pointer inline-block p-1"
        >
          <span className="text-sm font-light">
            Hello, sign in
          </span>
          <br />
          Account & Lists
        </Link>

        <Link
          to="/login"
          className="hover:border-2 font-bold cursor-pointer inline-block p-1"
          >
        <span className="font-bold cursor-pointer">
          <span className="text-sm font-light">Returns</span><br />
          & Orders
        </span>
        </Link>

        <Link to="/cart" className="hover:border-2 font-bold flex items-center gap-1">
          <div className="relative cursor-pointer">
            <span className="text-3xl">🛒</span>Cart
            {state.cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-xs text-white rounded-full px-1">
                {state.cartItems.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
