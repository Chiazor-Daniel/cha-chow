export const popularDishes = [
  {
    id: 1,
    name: "Chicken & Chips",
    price: 4500,
    image:
      "https://food.goglowonline.com/upload/72F8AA0D-4BAC-4AC3-B116-BE2842A661EB.jpeg",
    restaurantId: 1,
    restaurant: "Mr Biggs",
    description:
      "Crispy fried chicken served with golden potato chips and our special dipping sauce.",
    preparationTime: "15-20 mins",
    rating: 4.7,
    reviews: 128,
    ingredients: ["Chicken", "Potatoes", "Spices", "Vegetable Oil"],
  },
  {
    id: 2,
    name: "Bole & Fish",
    price: 3500,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fui9nQESuJIU%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=11a05fe6b3fcb7feb659d329973486a6941cf6e57e6e85a51d645f9274410c6c&ipo=images",
    restaurantId: 2,
    restaurant: "Mama Ada",
    description:
      "Traditional roasted plantain served with perfectly grilled catfish and pepper sauce.",
    preparationTime: "20-25 mins",
    rating: 4.8,
    reviews: 97,
    ingredients: ["Plantain", "Catfish", "Peppers", "Onions", "Palm Oil"],
  },
  {
    id: 3,
    name: "Jollof Rice & Chicken",
    price: 4000,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmydiasporakitchen.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fimg_0678.jpg&f=1&nofb=1&ipt=1652d3bff9399cd74659add9e8eb459e1230edf18ddb7b070318b53465789346&ipo=images",
    restaurantId: 3,
    restaurant: "Kilimanjaro",
    description:
      "Flavorful rice cooked in tomato sauce with herbs and spices, served with a piece of tender chicken.",
    preparationTime: "25-30 mins",
    rating: 4.9,
    reviews: 156,
    ingredients: ["Rice", "Chicken", "Tomatoes", "Peppers", "Onions", "Spices"],
  },
  {
    id: 4,
    name: "Meat Pie",
    price: 1200,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seriouseats.com%2Fthmb%2F2E-RocNOTLxwZRjDMFQkmd5yflk%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2F20220809-NigerianMeatpies-MaureenCelestine-hedenote-939cb7af957a40a9b8af6f6dfe323ff1.JPG&f=1&nofb=1&ipt=586c1a0545b238951ce2a2d0fa6d46794f107b44b1dd38d2a7acfec5eb03a387&ipo=images",

    restaurantId: 1,
    restaurant: "Mr Biggs",
    description:
      "Golden pastry filled with seasoned minced meat, potatoes, and carrots.",
    preparationTime: "5-10 mins",
    rating: 4.5,
    reviews: 89,
    ingredients: ["Flour", "Beef", "Potatoes", "Carrots", "Onions"],
  },

  // {
  //   id: 5,
  //   name: "Egusi Soup & Pounded Yam",
  //   price: 3800,
  //   image: "/api/placeholder/400/320",
  //   restaurantId: 2,
  //   restaurant: "Mama Ada",
  //   description:
  //     "Rich melon seed soup with assorted meat and vegetables, served with smooth pounded yam.",
  //   preparationTime: "30-35 mins",
  //   rating: 4.8,
  //   reviews: 112,
  //   ingredients: ["Egusi", "Assorted Meat", "Vegetables", "Palm Oil", "Yam"],
  // },
  // {
  //   id: 6,
  //   name: "Suya",
  //   price: 2500,
  //   image: "/api/placeholder/400/320",
  //   restaurantId: 4,
  //   restaurant: "Suya Spot",
  //   description:
  //     "Spicy skewered beef grilled to perfection, served with onions and tomatoes.",
  //   preparationTime: "15-20 mins",
  //   rating: 4.9,
  //   reviews: 203,
  //   ingredients: ["Beef", "Suya Spice", "Onions", "Tomatoes", "Groundnut Oil"],
  // },
  // {
  //   id: 7,
  //   name: "Shawarma",
  //   price: 2200,
  //   image: "/api/placeholder/400/320",
  //   restaurantId: 5,
  //   restaurant: "Zeus Lounge",
  //   description:
  //     "Grilled chicken wrapped in flatbread with vegetables and garlic sauce.",
  //   preparationTime: "10-15 mins",
  //   rating: 4.6,
  //   reviews: 175,
  //   ingredients: ["Chicken", "Flatbread", "Vegetables", "Garlic Sauce"],
  // },
  // {
  //   id: 8,
  //   name: "Fried Rice & Chicken",
  //   price: 3800,
  //   image: "/api/placeholder/400/320",
  //   restaurantId: 3,
  //   restaurant: "Kilimanjaro",
  //   description:
  //     "Flavorful rice stir-fried with vegetables and spices, served with a piece of fried chicken.",
  //   preparationTime: "25-30 mins",
  //   rating: 4.7,
  //   reviews: 132,
  //   ingredients: ["Rice", "Chicken", "Mixed Vegetables", "Soy Sauce", "Spices"],
  // },
];

// You can also export categories or other related data
export const dishCategories = [
  { id: "all", name: "All", isActive: true },
  { id: "local", name: "Local", isActive: false },
  { id: "fastfood", name: "Fast Food", isActive: false },
  { id: "foreign", name: "Foreign", isActive: false },
  { id: "snacks", name: "Snacks", isActive: false },
];

// Helper function to format price to Naira that can be reused across components
export const formatPrice = (price) => {
  return `₦${price.toLocaleString("en-NG")}`;
};
