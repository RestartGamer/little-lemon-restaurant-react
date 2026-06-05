import { orders } from "../data/orders.js";

export function createOrder(req, res) {
  const { items, totalPrice } = req.body;

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ message: "Order needs at least one item" });
  }

  const order = {
    id: orders.length + 1,
    userId: req.user.id,
    items,
    totalPrice: Number(totalPrice) || 0,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  orders.push(order);

  res.status(201).json({ order });
}

export function getMyOrders(req, res) {
  const myOrders = orders.filter((order) => order.userId === req.user.id);
  res.json(myOrders);
}
