/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); // Receives objects

  function addToCart(item) {
    setCartItems((currentCartItems) => {
      const existingItem = currentCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return currentCartItems.map((currentCartItem) =>
          currentCartItem.id === item.id
            ? { ...currentCartItem, quantity: currentCartItem.quantity + 1 }
            : currentCartItem
        );
      }

      return [
        ...currentCartItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(item, quantity = 1) {
    setCartItems((currentCartItems) => {
      const existingItem = currentCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return currentCartItems
          .map((currentCartItem) =>
            currentCartItem.id === item.id
              ? { ...currentCartItem, quantity: currentCartItem.quantity - quantity }
              : currentCartItem
          )
          .filter((currentCartItem) => currentCartItem.quantity > 0);
      }

      return [...currentCartItems];
    });
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
