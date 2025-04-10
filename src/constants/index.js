export const PRICE_RANGES = [
  { label: "All", value: 0 },
  { label: "Under ₦1000", value: 1000 },
  { label: "Under ₦2000", value: 2000 },
  { label: "Under ₦4000", value: 4000 },
  { label: "Under ₦6000", value: 6000 },
];

export const CATEGORIES = [
  { id: 'all', name: 'All', isActive: true },
  { id: 'local', name: 'Local', isActive: false },
  { id: 'fastfood', name: 'Fast Food', isActive: false },
  { id: 'african', name: 'Sharp Snacks', isActive: false },
];

export const MENU_CATEGORIES = ["All", "Breakfast", "Lunch", "Dinner"];

export const formatPrice = (price) => `₦${price.toLocaleString('en-NG')}`;

export const ROUTES = {
  HOME: '/',
  RESTAURANT: '/restaurant/:id',
  ORDERS: '/orders',
  HISTORY: '/history',
  PROFILE: '/profile',
  PAYMENT: '/ttF'
}; 