# Little Lemon Restaurant React

A responsive Little Lemon restaurant ordering app built with React, Vite, Material UI, React Router, React Hook Form, Zod, and an Express mock API.

## Features

- Responsive restaurant landing page
- Menu fetched from the Express API
- Product details page
- Shopping cart with quantity controls
- Login/register mock authentication
- Checkout page with empty, loading, success, and error states
- Authenticated mock order submission to the backend
- Reservation form with React Hook Form and Zod validation
- Express API for auth, food items, and orders

## Tech Stack

### Frontend

- React 19
- Vite
- Material UI
- React Router
- React Hook Form
- Zod

### Backend

- Node.js
- Express
- CORS
- In-memory mock data

## Project Structure

```txt
client/   React + Vite frontend
server/   Express mock backend
shared/   Original shared validation schema copy
```

The active frontend validation schema is now copied into `client/src/config/schema.js` so the Vite build can resolve `zod` correctly from the client package.

## Screenshots

Screenshots should be added after running the project locally:

```txt
docs/screenshots/home.png
docs/screenshots/cart.png
docs/screenshots/checkout.png
```

I could not generate browser screenshots inside this environment because local browser access to `localhost` was blocked, but the section is prepared for your README.

## Environment Variables

### Client

Create `client/.env` from `client/.env.example`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

### Server

Create `server/.env` from `server/.env.example` if your host supports environment variables:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
IMAGE_BASE_URL=http://localhost:5000/images
```

The project also has safe local fallbacks, so it runs locally even without `.env` files.

## Run Locally

Open two terminals.

### 1. Start the backend

```bash
cd server
npm install
npm run dev
```

The API runs on:

```txt
http://localhost:5000
```

### 2. Start the frontend

```bash
cd client
npm install
npm run dev
```

The frontend runs on:

```txt
http://localhost:5173
```

## Build Frontend

```bash
cd client
npm run build
```

## API Endpoints

### Auth

```txt
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### Food Items

```txt
GET /api/food-items
GET /api/food-items/:id
```

### Orders

```txt
POST /api/orders
GET  /api/orders/my-orders
```

Order routes require a mock bearer token from login/register.

## Deployment Notes

I cannot deploy to your hosting accounts from this zip alone, but the project is prepared for deployment.

### Frontend

Deploy `client/` to Netlify, Vercel, or another static host.

Set this environment variable in the frontend host:

```env
VITE_API_BASE_URL=https://your-backend-url.example.com
```

Then build with:

```bash
npm run build
```

### Backend

Deploy `server/` to Render, Railway, Fly.io, or another Node host.

Set these backend environment variables:

```env
PORT=5000
CLIENT_URL=https://your-frontend-url.example.com
IMAGE_BASE_URL=https://your-backend-url.example.com/images
```

Then start with:

```bash
npm run start
```

## Notes

- Food items are now loaded through the API instead of direct frontend imports from the server folder.
- API URLs are centralized in `client/src/config/api.js`.
- Checkout now submits orders to `POST /api/orders`.
- Console debugging logs and unused imports were cleaned up.
- The frontend build passes. ESLint passes with two existing hook dependency warnings.
