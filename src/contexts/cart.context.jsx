import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, product) => {
  const existingItem = cartItems.find((item) => item.id === product.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: ++item.quantity } : item
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(newCount);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
