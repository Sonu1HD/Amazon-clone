import express from "express";
import {
  getProducts,
  getProductById,
  getHomepageData
} from "../controllers/Productcontrollers.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/homepage", getHomepageData);
router.get("/:id", getProductById);

export default router;
