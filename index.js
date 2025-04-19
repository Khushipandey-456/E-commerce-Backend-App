const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./configdb/mongodb");
const authRoutes = require("./routes/auth.route");
const productRoutes = require("./routes/product.route");
const cartRoutes = require("./routes/cart.route");
const orderRoutes = require("./routes/order.route");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

app.listen(process.env.PORT, () => {
    connectDB();
  console.log("server Started");
});
