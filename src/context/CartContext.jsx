import React, { createContext, useContext, useState, useEffect } from 'react';
import { restaurants } from '../../dummydata/restaurants';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Initialize cart from restaurants data
    const items = restaurants.flatMap(restaurant => 
      restaurant.menuItems?.filter(item => item.orderd) || []
    );
    setCartItems(items);
    setCartCount(items.length);
  }, []);

  const addToCart = (itemId, restaurantId) => {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    if (!restaurant?.menuItems) return;

    const updatedRestaurants = restaurants.map(r => {
      if (r.id === restaurantId) {
        return {
          ...r,
          menuItems: r.menuItems.map(item =>
            item.id === itemId ? { ...item, orderd: true } : item
          )
        };
      }
      return r;
    });

    const newItem = restaurant.menuItems.find(item => item.id === itemId);
    if (newItem) {
      setCartItems(prev => [...prev, newItem]);
      setCartCount(prev => prev + 1);
    }
  };

  const removeFromCart = (itemId) => {
    const updatedRestaurants = restaurants.map(restaurant => ({
      ...restaurant,
      menuItems: restaurant.menuItems?.map(item =>
        item.id === itemId ? { ...item, orderd: false } : item
      ) || []
    }));

    setCartItems(prev => prev.filter(item => item.id !== itemId));
    setCartCount(prev => prev - 1);
  };

  const clearCart = () => {
    const updatedRestaurants = restaurants.map(restaurant => ({
      ...restaurant,
      menuItems: restaurant.menuItems?.map(item => ({ ...item, orderd: false })) || []
    }));

    setCartItems([]);
    setCartCount(0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      cartCount,
      addToCart,
      removeFromCart,
      clearCart,
      getTotalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 