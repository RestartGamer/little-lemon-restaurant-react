# Little Lemon Server

Simple Express backend for your Little Lemon frontend.

This version keeps the backend understandable but still uses normal backend folders:

```txt
server
├── controllers
│   ├── authController.js
│   ├── foodController.js
│   └── orderController.js
├── data
│   ├── foodItems.js
│   ├── users.js
│   └── orders.js
├── middleware
│   └── authMiddleware.js
├── public
│   └── images
├── routes
│   ├── authRoutes.js
│   ├── foodRoutes.js
│   └── orderRoutes.js
├── package.json
├── README.md
└── server.js
```

## Run

```bash
cd server
npm install
npm run dev
```

Server runs here:

```txt
http://localhost:5000
```

Your frontend runs here with Vite:

```txt
http://localhost:5173
```

## Current frontend-compatible routes

```txt
POST http://localhost:5000/api/auth/register
POST http://localhost:5000/api/auth/login
GET  http://localhost:5000/api/auth/me
```

These return the same shape your `AuthContext.jsx` expects:

```js
{
  user: {
    id: 1,
    name: "Can",
    email: "can@email.com"
  },
  token: "mock-token..."
}
```

`/api/auth/me` returns:

```js
{
  user: {
    id: 1,
    name: "Can",
    email: "can@email.com"
  }
}
```

## Food item route

```txt
GET http://localhost:5000/api/food-items
GET http://localhost:5000/api/food-items/:id
```

The food items were copied from your existing frontend `client/src/data/food-items.js`.

## Important limitation

This is a mock backend. Users and orders are stored in arrays, so they reset when the server restarts.

That is intentional for now, because this is meant to be easy to understand before moving to a real database.
