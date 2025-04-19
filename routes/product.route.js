const express = require("express");
const { createProduct, getProducts } = require("../controllers/productController");
const auth = require("../middlewares/auth");
const adminOnly = require("../middlewares/role");
const router = express.Router();

router.post("/", auth, adminOnly, createProduct);
router.get("/", getProducts);

module.exports = router;
