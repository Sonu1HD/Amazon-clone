import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import HeroBanner from "./pages/HeroBanner";
import DealsGrid from "./pages/DealsGrid";
import HomePage from "./pages/HomePage";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import ProductScreen from "./pages/ProductScreen";
import CategoryNav from "./components/CategoryNav";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import Login from "./pages/Login";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };
  

  return (
    <>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      <CategoryNav />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <div className="relative">
                <HeroBanner />

                <div className="relative z-12 p-5 -mt-40">
                  <DealsGrid />
                </div>
              </div>

              {/* <HomePage /> */}

              <div className="pt-10 px-6">
                {/* <Home /> */}
              </div>
            </>
          }
        />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        {/* PRODUCT DETAILS PAGE */}
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
