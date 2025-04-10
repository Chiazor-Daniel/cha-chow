import { useState, useEffect } from 'react';
import { restaurants } from '../../dummydata/restaurants';
import { PRICE_RANGES, MENU_CATEGORIES } from '../constants';

export const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [visibleItems, setVisibleItems] = useState(4);
  const [minPrice, setMinPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const foundRestaurant = restaurants.find(r => r.id === parseInt(id));
    setRestaurant(foundRestaurant || null);
  }, [id]);

  const filteredItems = restaurant?.menuItems?.filter(
    (item) =>
      (minPrice === 0 || item.price <= minPrice) &&
      (selectedCategory === "All" || item.category === selectedCategory)
  ) || [];

  const handleViewMore = () => {
    setVisibleItems(prev => prev + 4);
  };

  return {
    restaurant,
    visibleItems,
    setVisibleItems,
    minPrice,
    setMinPrice,
    selectedCategory,
    setSelectedCategory,
    filteredItems,
    handleViewMore,
    priceRanges: PRICE_RANGES,
    menuCategories: MENU_CATEGORIES
  };
}; 