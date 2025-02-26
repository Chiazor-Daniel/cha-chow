import React from 'react';
import { Search, ShoppingBag, Home, User, Heart } from 'lucide-react';
import RestaurantModal from './restuarantModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BottomNav } from './components/BottomNav';
import { TopNav } from './components/TopNav';
import { restaurants } from '../dummydata/restaurants';

const RestaurantApp = () => {
  const navigate = useNavigate();
  const categories = [
    { id: 'all', name: 'All', isActive: true },
    { id: 'local', name: 'Local', isActive: false },
    // { id: 'chinese', name: 'Chinese', isActive: false },
    { id: 'fastfood', name: 'Fast Food', isActive: false },
    { id: 'african', name: 'Sharp Snacks', isActive: false },
    // { id: 'continental', name: 'Continental', isActive: false },
  ];

  const handleRestaurantClick = (restaurant) => {
    navigate(`/restaurant/${restaurant.id}`);
  };


  const popularDishes = [
    {
      id: 1,
      name: "Chicken & Chips",
      price: 4500,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdallaschicken.co.uk%2Fwp-content%2Fuploads%2F2021%2F05%2FChicken-6.jpg&f=1&nofb=1&ipt=aa32580527245a0437f3d84ad665014b661cedac5b621759e08f6507f515a860&ipo=images",
      restaurantId: 1,
      restaurant: "Mr Biggs"
    },
    {
      id: 2,
      name: "Bole & Fish",
      price: 3500,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fui9nQESuJIU%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=11a05fe6b3fcb7feb659d329973486a6941cf6e57e6e85a51d645f9274410c6c&ipo=images",
      restaurantId: 2,
      restaurant: "Mama Ada"
    },
    {
      id: 3,
      name: "Jollof Rice & Chicken",
      price: 4000,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmydiasporakitchen.com%2Fwp-content%2Fuploads%2F2017%2F09%2Fimg_0678.jpg&f=1&nofb=1&ipt=1652d3bff9399cd74659add9e8eb459e1230edf18ddb7b070318b53465789346&ipo=images",
      restaurantId: 3,
      restaurant: "Kilimanjaro"
    },
    {
      id: 4,
      name: "Meat Pie",
      price: 1200,
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seriouseats.com%2Fthmb%2F2E-RocNOTLxwZRjDMFQkmd5yflk%3D%2F1500x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2F20220809-NigerianMeatpies-MaureenCelestine-hedenote-939cb7af957a40a9b8af6f6dfe323ff1.JPG&f=1&nofb=1&ipt=586c1a0545b238951ce2a2d0fa6d46794f107b44b1dd38d2a7acfec5eb03a387&ipo=images",
      restaurantId: 1,
      restaurant: "Mr Biggs"
    },
    
  ];

  
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // Format price to Naira
  const formatPrice = (price) => {
    return `₦${price.toLocaleString('en-NG')}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <TopNav />

      {/* Main Content */}
      <main className="pt-20 pb-20 px-4 max-w-4xl mx-auto">
        {/* Categories */}
        <div className="flex gap-4 overflow-x-auto py-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full whitespace-nowrap ${category.isActive
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-orange-50'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Section */}
        <div className="my-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Restaurants near you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {restaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
                onClick={() => handleRestaurantClick(restaurant)}
              >
                <div className="h-48 bg-gray-200">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">{restaurant.name}</h3>

                  </div>
                  <p className="text-gray-600 text-sm mt-1">{restaurant.priceRange}</p>
                  <div className="flex items-center mt-2">
                    <span className="bg-orange-100 text-orange-500 px-2 py-1 rounded-full text-sm">
                      {restaurant.rating} ★
                    </span>
                    <span className="text-gray-500 text-sm ml-2">({restaurant.reviews}+ reviews)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Dishes */}
        <div className="my-6">
          <div className='flex justify-between '>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Popular Dishes</h2>
            <h2 className="text-sm  text-orange-500 mb-4">View More</h2>

          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularDishes.map((dish) => (
              <div key={dish.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-32 bg-gray-200">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-800">{dish.name}</h3>
                  <p className="text-gray-500 text-xs mt-1">{dish.restaurant}</p>
                  <p className="text-orange-500 font-medium mt-1">{formatPrice(dish.price)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <RestaurantModal
        isOpen={!!selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
        restaurant={selectedRestaurant}
      />
      {/* Bottom Navigation */}
     <BottomNav />
    </div>
  );
};

export default RestaurantApp;