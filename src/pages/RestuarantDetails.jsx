import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Heart,
  Search,
  ShoppingBag,
  Star,
  Utensils,
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { useParams } from "react-router-dom";
import { restaurants } from "../../dummydata/restaurants";
import { TopNav } from "../components/TopNav";

const RestaurantDetails = ({ count, addAm }) => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [minPrice, setMinPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState("");

  useEffect(() => {
    //    let filtered = restaurants.filter((index)=> index.id == id)
    //    console.log("fikll", filtered)
    setRestaurant(restaurants.filter((index) => index.id == id)[0]);
  }, []);

  const priceRanges = [
    { label: "All", value: 0 },
    { label: "Under ₦1000", value: 1000 },
    { label: "Under ₦2000", value: 2000 },
    { label: "Under ₦4000", value: 4000 },
    { label: "Under ₦6000", value: 6000 },
  ];

  const formatPrice = (price) => `₦${price.toLocaleString("en-NG")}`;

  const filteredItems = restaurant?.menuItems?.filter(
    (item) =>
      (minPrice === 0 || item.price <= minPrice) &&
      (selectedCategory === "All" || item.category === selectedCategory)
  );

  const changeOrderStatus = (idx, newStatus) => {
    console.log(restaurant.menuItems);

    // Find the menu item to update
    const filteredOrder = restaurant.menuItems.find(
      (menuItem) => menuItem.id === idx
    );

    // Update the order status
    if (filteredOrder) {
      setRestaurant((prev) => ({
        ...prev,
        menuItems: prev.menuItems.map((menuItem) =>
          menuItem.id === idx ? { ...menuItem, orderd: newStatus } : menuItem
        ),
      }));
    }

    console.log("orderId", filteredOrder?.id);
    console.log("idx", idx);
    console.log("newStatus", newStatus);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <TopNav showBack={true} count={count} title={"Restaurant Details"} />

        {/* Main Content */}
        <div className="pt-16 pb-20 max-w-4xl mx-auto">
          {/* Restaurant Hero Section */}
          <div className="relative">
            <div className="h-64 w-full overflow-hidden">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white p-4 mx-4 -mt-20 rounded-lg shadow-lg relative">
              <h2 className="text-2xl font-bold">{restaurant.name}</h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-orange-500">
                  <Star size={16} fill="currentColor" />
                  <span className="ml-1">{restaurant.rating}</span>
                </div>
                <span className="text-gray-500">
                  ({restaurant.reviews}+ reviews)
                </span>
              </div>
              <p className="text-gray-600 mt-2">
                {restaurant.cuisine} • {restaurant.priceRange}
              </p>
              <p className="text-gray-600 mt-2">{restaurant.description}</p>
            </div>
          </div>

          <div className="p-4 space-y-6">
            {/* Price Filter Chips */}
            <div className="space-y-2">
              <label className="font-medium">Filter by Price</label>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setMinPrice(range.value)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      minPrice === range.value
                        ? "bg-orange-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-x-2">
              {["All", "Breakfast", "Lunch", "Dinner"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {restaurant.menuItems && restaurant.menuItems.length > 1 ? (
                restaurant.menuItems?.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center text-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 object-cover rounded-full mb-2"
                    />
                    <h4 className="font-medium text-md mb-1">{item.name}</h4>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                    <p className="font-medium text-orange-500 mt-1">
                      {formatPrice(item.price)}
                    </p>
                    <button
                      onClick={() => {
                        if (item.orderd) {
                          addAm(-1); // Decrease count when removing
                        } else {
                          addAm(1); // Increase count when adding
                        }
                        changeOrderStatus(item.id, !item.orderd);
                      }}
                      className={`p-2 mt-2 text-white font-semibold rounded-md w-full flex items-center justify-center gap-2 transition-colors ${
                        item.orderd
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-orange-500 hover:bg-orange-600"
                      }`}
                    >
                      <span>
                        {item.orderd ? "Remove from Order" : "Add to Order"}
                      </span>
                      <Utensils size={15} />
                    </button>
                  </div>
                ))
              ) : (
                <p>NO PRODUCTS AVAILABLE</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
};

export default RestaurantDetails;
