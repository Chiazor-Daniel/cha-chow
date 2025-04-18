import React from "react";
import {
  ArrowLeft,
  Heart,
  Search,
  ShoppingBag,
  Star,
  Utensils,
} from "lucide-react";
import { useParams } from "react-router-dom";
import { TopNav } from "../components/TopNav";
import { BottomNav } from "../components/BottomNav";
import { popularDishes } from "../../dummydata/dishes";
import { restaurants } from "../../dummydata/restaurants";

const FeaturedMeal = () => {
  const { id } = useParams();

  // Find the dish by ID or use a default dish if not found
  const dish = popularDishes.find((dish) => dish.id === parseInt(id));
  // Format price to Naira
  const formatPrice = (price) => {
    return `₦${price.toLocaleString("en-NG")}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNav showBack={true} title={"Featured Meal"} />

      {/* Main Content */}
      <main className="pt-20 pb-20 px-4 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="h-64 bg-gray-200">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
              }}
            />
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold text-gray-800">{dish.name}</h1>
            <p className="text-gray-600 mt-1">{dish.description}</p>
            <p className="text-orange-500 text-xl font-semibold mt-3">
              <span className=" text-gray-800 text-xl font-semibold pr-1 ">
                Average Price:
              </span>
              ₦{dish.price}
            </p>
          </div>
        </div>

        <div className="avaliableResturants mt-5 ">
          <h2 className="text-2xl font-bold text-gray-800">
            Avaliable Resturants Selling {dish.name}:
          </h2>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-4">
            {restaurants ? (
              restaurants.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-1/2 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                        Avaliable
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">
                      {item.priceRange}
                    </p>
                    <div className="flex items-center mt-3">
                      <span className="bg-orange-100 text-orange-500 px-2.5 py-1 rounded-full text-sm font-medium">
                        {item.rating} ★
                      </span>
                      <span className="text-gray-500 text-sm ml-2">
                        ({item.reviews}+ reviews)
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (item.orderd) {
                        addAm(-1); // Decrease count when removing
                      } else {
                        addAm(1); // Increase count when adding
                      }
                      changeOrderStatus(item.id, !item.orderd);
                    }}
                    className={`p-2 mt-2 text-white font-semibold rounded-md w-full flex items-center justify-center gap-2 transition-colors ${"bg-orange-500 hover:bg-orange-600"}`}
                  >
                    <span>
                      {item.orderd ? "Remove from Order" : "Chaw for  "}
                    </span>
                    <Utensils size={15} />
                  </button>
                </div>
              ))
            ) : (
              <p>NO RESTURANT AVAILABLE</p>
            )}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default FeaturedMeal;
