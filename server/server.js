import { fileURLToPath } from "node:url";
import path from "node:path";
import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
const currentFilePath = fileURLToPath(import.meta.url);
const currentDirectory = path.dirname(currentFilePath);

app.use(cors({ origin: CLIENT_URL }));
app.use(express.json());
app.use(
  "/images",
  express.static(path.join(currentDirectory, "public/images"))
);

app.get("/", (_req, res) => {
  res.json({ message: "Little Lemon server is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/food-items", foodRoutes);
app.use("/api/orders", orderRoutes);

const isMainModule =
  process.argv[1] &&
  path.resolve(process.argv[1]) === path.resolve(currentFilePath);

if (isMainModule) {
  app.listen(PORT, () => {
    console.info(`Server running on http://localhost:${PORT}`);
  });
}

export { app };
