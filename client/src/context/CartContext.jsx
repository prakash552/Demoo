import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]); // Now stores full product objects

  // Add to Wishlist (avoid duplicates)
  const addToWishlist = (product) => {
    if (!product?.id) return; // avoid invalid products
    setWishlist((prev) => {
      if (prev.some((item) => item.id === product.id)) return prev; // already exists
      return [...prev, product];
    });
  };

  // Remove from Wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // Add to Cart
  const addToCart = (product, quantity = 1) => {
    if (!product?.id) return;
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update Quantity in Cart
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return;
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
