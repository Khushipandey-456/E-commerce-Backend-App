const Order = require("../models/order.model");
const Cart = require("../models/cart.model");
const Product = require("../models/product.model");

exports.createOrder = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  if (!cart || cart.items.length === 0)
    return res.status(400).json({ message: "Cart is empty" });

  let total = 0;
  for (let item of cart.items) {
    const product = await Product.findById(item.productId);
    if (product) total += product.price * item.quantity;
  }

  const order = await Order.create({
    userId: req.user.id,
    items: cart.items,
    totalAmount: total,
  });

  await Cart.deleteOne({ userId: req.user.id });
  res.json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id });
  res.json(orders);
};
