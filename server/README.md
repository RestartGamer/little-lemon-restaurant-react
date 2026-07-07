# Little Lemon Server

An Express mock API that supports the Little Lemon frontend.

## Commands

```bash
npm install
npm run dev
npm run start
npm test
```

The server runs at `http://localhost:5000` by default.

## Structure

```text
controllers/    Request handlers
routes/         Express route definitions
middleware/     Mock bearer-token authentication
data/           In-memory menu, user, and order data
public/images/  Optimized menu images
tests/          API integration tests
```

## Routes

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
GET  /api/food-items
GET  /api/food-items/:id
POST /api/orders
GET  /api/orders/my-orders
```

Users, tokens, and orders are intentionally stored in memory for demonstration purposes and reset whenever the server restarts.
