import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

import { users } from "./data/users.js"

const app = express();
const PORT = 5000;
const CLIENT_URL = "http://localhost:5173";

app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());
app.use("/images", express.static("public/images"));

app.get("/", (req, res) => {
  res.json({ message: "Little Lemon server is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/food-items", foodRoutes);
app.use("/api/orders", orderRoutes);

console.log(users)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
