import React, { useEffect, useState } from "react";
import { Utensils, X } from "lucide-react";

const RestaurantModal = ({ isOpen, onClose, restaurant }) => {
  const [visibleItems, setVisibleItems] = useState(4);
  const [minPrice, setMinPrice] = useState(0); // Changed default to 0
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const menuItems = [
    {
      id: 1,
      name: "Chicken & Chips",
      price: 4500,
      description: "Crispy fried chicken served with seasoned chips",
      image: "https://food.goglowonline.com/upload/72F8AA0D-4BAC-4AC3-B116-BE2842A661EB.jpeg",
      category: "Main Course",
    },
    {
      id: 2,
      name: "Jollof Rice Special",
      price: 3800,
      description: "Spicy rice dish served with chicken and plantain",
      image: "https://i0.wp.com/travelandmunchies.com/wp-content/uploads/2022/11/IMG_8133-scaled.jpg?fit=2560%2C1828&ssl=1",
      category: "Main Course",
    },
    {
      id: 2,
      name: "Coca Cola",
      price: 3800,
      description: "Spicy rice dish served with chicken and plantain",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/190px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg",
      category: "Main Course",
    },{
      id: 2,
      name: "Coca Cola",
      price: 3800,
      description: "Spicy rice dish served with chicken and plantain",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/190px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg",
      category: "Main Course",
    },{
      id: 2,
      name: "Coca Cola",
      price: 3800,
      description: "Spicy rice dish served with chicken and plantain",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/190px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg",
      category: "Main Course",
    },{
      id: 2,
      name: "Coca Cola",
      price: 3800,
      description: "Spicy rice dish served with chicken and plantain",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/190px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg",
      category: "Main Course",
    },{
      id: 2,
      name: "Coca Cola",
      price: 3800,
      description: "Spicy rice dish served with chicken and plantain",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/190px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg",
      category: "Main Course",
    },{
      id: 2,
      name: "Coca Cola",
      price: 3800,
      description: "Spicy rice dish served with chicken and plantain",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/190px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg",
      category: "Main Course",
    },{
      id: 2,
      name: "Coca Cola",
      price: 3800,
      description: "Spicy rice dish served with chicken and plantain",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/190px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg",
      category: "Main Course",
    },{
      id: 2,
      name: "Coca Cola",
      price: 3800,
      description: "Spicy rice dish served with chicken and plantain",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/190px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg",
      category: "Main Course",
    },
   
  ];

  const priceRanges = [
    { label: "All", value: 0 },
    { label: "Under ₦1000", value: 1000 },
    { label: "Under ₦2000", value: 2000 },
    { label: "Under ₦4000", value: 4000 },
    { label: "Under ₦6000", value: 6000 },
  ];

  const formatPrice = (price) => `₦${price.toLocaleString("en-NG")}`;

  const handleViewMore = () => {
    setVisibleItems((prev) => prev + 4);
  };

  const filteredItems = menuItems.filter(
    (item) =>
      (minPrice === 0 || item.price <= minPrice) &&
      (selectedCategory === "All" || item.category === selectedCategory)
  );

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">{restaurant?.name}</h2>
        </div>

        <div className="p-6 space-y-6">
          <div className="h-48 w-full overflow-hidden rounded-lg">
            <img
              src={restaurant?.image}
              alt={restaurant?.name}
              className="w-full h-full object-cover"
            />
          </div>

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

          {/* Menu Items */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredItems.slice(0, visibleItems).map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 p-3 rounded-lg flex flex-col items-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 object-cover rounded-full mb-2"
                />
                <h4 className="font-medium text-md mb-1">{item.name}</h4>
                {/* <p className="text-sm text-gray-500 ">{item.description}</p> */}
                <p className="font-medium text-orange-500 mt-1">
                  {formatPrice(item.price)}
                </p>
                <button className="bg-orange-500 p-2 mt-2 text-white font-semibold rounded-md w-[100%] flex items-center justify-center gap-2">
                  <span>
                  chaw
                  </span>

                <Utensils size={15} />
                  </button> 
              </div>
            ))}
          </div>

          {filteredItems.length > visibleItems && (
            <div className="text-center">
              <button
                onClick={handleViewMore}
                className="text-orange-500 font-medium hover:underline"
              >
                View More
              </button>
            </div>
          )}

          {filteredItems.length === 0 && (
            <p className="text-center text-gray-500">No items match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;