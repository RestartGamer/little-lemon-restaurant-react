import {
  after,
  before,
  beforeEach,
  describe,
  test,
} from "node:test";
import assert from "node:assert/strict";

import { app } from "../server.js";
import { users } from "../data/users.js";
import { orders } from "../data/orders.js";

let server;
let baseUrl;

before(async () => {
  await new Promise((resolve) => {
    server = app.listen(0, "127.0.0.1", () => {
      const { port } = server.address();
      baseUrl = `http://127.0.0.1:${port}`;
      resolve();
    });
  });
});

after(async () => {
  await new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
});

beforeEach(() => {
  users.length = 0;
  orders.length = 0;
});

describe("Little Lemon API", () => {
  test("returns the API health response", async () => {
    const response = await fetch(baseUrl);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.message, "Little Lemon server is running");
  });

  test("returns the menu and an individual menu item", async () => {
    const menuResponse = await fetch(`${baseUrl}/api/food-items`);
    const menu = await menuResponse.json();

    assert.equal(menuResponse.status, 200);
    assert.ok(menu.length > 0);

    const itemResponse = await fetch(
      `${baseUrl}/api/food-items/${menu[0].id}`
    );
    const item = await itemResponse.json();

    assert.equal(itemResponse.status, 200);
    assert.equal(item.id, menu[0].id);
  });

  test("registers a user and returns the current user", async () => {
    const registerResponse = await fetch(
      `${baseUrl}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Portfolio User",
          email: "portfolio@example.com",
          password: "password123",
        }),
      }
    );

    const registration = await registerResponse.json();

    assert.equal(registerResponse.status, 201);
    assert.equal(registration.user.email, "portfolio@example.com");
    assert.ok(registration.token);

    const meResponse = await fetch(`${baseUrl}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${registration.token}`,
      },
    });
    const currentUser = await meResponse.json();

    assert.equal(meResponse.status, 200);
    assert.equal(currentUser.user.name, "Portfolio User");
  });

  test("rejects orders without authentication", async () => {
    const response = await fetch(`${baseUrl}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ id: 0, quantity: 1 }],
        totalPrice: 12.99,
        paymentMethod: "Paypal",
      }),
    });

    assert.equal(response.status, 401);
  });

  test("creates and retrieves an authenticated order", async () => {
    const registerResponse = await fetch(
      `${baseUrl}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Order User",
          email: "orders@example.com",
          password: "password123",
        }),
      }
    );
    const { token } = await registerResponse.json();

    const orderResponse = await fetch(`${baseUrl}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        items: [{ id: 0, quantity: 2 }],
        totalPrice: 25.98,
        paymentMethod: "Paypal",
      }),
    });
    const { order } = await orderResponse.json();

    assert.equal(orderResponse.status, 201);
    assert.equal(order.totalPrice, 25.98);
    assert.equal(order.status, "pending");

    const myOrdersResponse = await fetch(
      `${baseUrl}/api/orders/my-orders`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const myOrders = await myOrdersResponse.json();

    assert.equal(myOrdersResponse.status, 200);
    assert.equal(myOrders.length, 1);
    assert.equal(myOrders[0].id, order.id);
  });
});
