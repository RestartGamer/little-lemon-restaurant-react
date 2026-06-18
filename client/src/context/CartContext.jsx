import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]); //Receives objects

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

  function removeFromCart(item, quantity=1) {
    setCartItems((currentCartItems) => {  /*Note that this is the "functional state update pattern"
       where React automatically passes the current state as a parameter into the function*/
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
          .filter((currentCartItem) => currentCartItem.quantity > 0)
      }

      return [
        ...currentCartItems
      ];
    });
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}