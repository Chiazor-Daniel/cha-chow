import { restaurants } from '../../dummydata/restaurants';

export const formatPrice = (price) => `₦${price.toLocaleString('en-NG')}`;

export const getOrderedItems = () => {
  return restaurants.flatMap(restaurant => 
    restaurant.menuItems?.filter(item => item.orderd) || []
  );
};

export const calculateTotalPrice = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

export const removeItemFromOrder = (itemId) => {
  // Update the orderd status in the restaurants data
  restaurants.forEach(restaurant => {
    if (restaurant.menuItems) {
      restaurant.menuItems = restaurant.menuItems.map(item =>
        item.id === itemId ? { ...item, orderd: false } : item
      );
    }
  });
}; 