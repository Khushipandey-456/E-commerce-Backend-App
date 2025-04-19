const express = require("express");
const { addToCart, getCart } = require("../controllers/cartController");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/", auth, addToCart);
router.get("/", auth, getCart);

module.exports = router;
