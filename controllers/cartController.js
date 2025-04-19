const Cart = require("../models/cart.model");

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.user.id });
  if (!cart) cart = await Cart.create({ userId: req.user.id, items: [] });

  const index = cart.items.findIndex(i => i.productId === productId);
  if (index >= 0) cart.items[index].quantity += quantity;
  else cart.items.push({ productId, quantity });

  await cart.save();
  res.json(cart);
};

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id });
  res.json(cart || {});
};
