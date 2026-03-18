
import Product from "../models/Product.js";

const getRandomProducts = (products, limit, usedIds) => {
  const shuffled = [...products].sort(() => 0.5 - Math.random());
  const result = [];

  for (const product of shuffled) {
    const id = product._id.toString();

    if (!usedIds.has(id)) {
      result.push(product);
      usedIds.add(id);
    }

    if (result.length === limit) break;
  }

  return result;
};

export const getProducts = async (req, res) => {
  try {
    const keyword = req.query.keyword
      ? { title: { $regex: req.query.keyword, $options: "i" } }
      : {};

    const category = req.query.category
      ? { category: req.query.category }
      : {};

    const products = await Product.find({
      ...keyword,
      ...category
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Invalid product ID" });
  }
};

export const getHomepageData = async (req, res) => {
  try {
    const products = await Product.find();

    const usedIds = new Set();

    const electronics = products.filter(
      p => p.category?.toLowerCase() === "electronics"
    );

    const home = products.filter(
      p => p.category?.toLowerCase() === "home"
    );

    const fashion = products.filter(
      p => p.category?.toLowerCase() === "fashion"
    );

    const winter = products.filter(
      p => p.category?.toLowerCase() === "winter"
    );

    const Signin = products.filter(
      p => p.category?.toLowerCase() === "Signin"
    );

    console.log(
      "electronics count:",
      electronics.length,
      "home count:",
      home.length,
      "fashion count:",
      fashion.length,
      "winter count:",
      winter.length,
      "totalProducts:", 
      products.length,
    );

    const sections = [
      {
        id: "continue-shopping",
        title: "Continue shopping deals",
        footer: "See more deals",
        type: "grid",
        products: getRandomProducts(electronics, 4, usedIds)
      },
      {
        id: "electronics-deals",
        title: "Top Electronics Deals",
        footer: "Shop now",
        type: "grid",
        products: getRandomProducts(electronics, 4, usedIds)
      },
      {
        id: "electronics-deals-2",
        title: "Top electronics deals",
        footer: "Shop now",
        type: "grid",
        products: getRandomProducts(electronics, 4, usedIds)
      },
      {
        id: "home-decor",
        title: "Home decor essentials",
        footer: "Explore",
        type: "grid",
        products: getRandomProducts(home, 4, usedIds)
      },
      {
        id: "daily-essentials",
        title: "Daily essentials",
        footer: "See all",
        type: "grid",
        products: getRandomProducts(home, 4, usedIds)
      },
      {
        id: "revamp-life",
        title: "Revamp your life in style",
        footer: "Explore all",
        type: "grid",
        products: getRandomProducts(home, 4, usedIds)
      },
      {
        id: "fashion-picks",
        title: "Top fashion picks",
        footer: "View all",
        type: "grid",
        products: getRandomProducts(fashion, 4, usedIds)
      },
      {
        id: "related-items",
        title: "Related items",
        type: "grid",
        products: getRandomProducts(home, 4, usedIds)
      },
      {
        id: "discounts-gst",
        title: "Bulk order discounts + Up to 18% GST savings",
        type: "grid",
        products: getRandomProducts(home, 4, usedIds)
      },
      {
        id: "fashion-favorites",
        title: "Fashion favorites",
        footer: "View all",
        type: "grid",
        products: getRandomProducts(fashion, 4, usedIds)
      },
      {
        id: "kitchen-deals",
        title: "Kitchen & Dining deals",
        footer: "See offers",
        type: "grid",
        products: getRandomProducts(home, 4, usedIds)
      },
      {
        id: "mobile-accessories",
        title: "Mobile accessories",
        footer: "Buy now",
        type: "grid",
        products: getRandomProducts(electronics, 4, usedIds)
      },
      {
        id: "fashion-strip",
        title: "Up to 70% off | Fashion essentials curated from emerging brands",
        type: "strip",
        products: getRandomProducts(fashion, 10, usedIds)
      },
      {
        id: "electronics-strip",
        title: "Up to 80% off | Shop now for electronics",
        type: "strip",
        products: getRandomProducts(electronics, 10, usedIds)
      },
      {
        id: "home-strip",
        title: "Top deals for your home",
        type: "strip",
        products: getRandomProducts(home, 10, usedIds)
      },
      {
        id: "winter-strip",
        title: "Up to 70% off | Winter essentials curated from emerging brands",
        type: "strip",
        products: getRandomProducts(winter, 10, usedIds)
      }

    ];

    const signInDeal = {
      title: "Best iPhone Deals",
      product: getRandomProducts(Signin, 1, usedIds)[0]
    };

    res.json({ sections, signInDeal });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

