import { Search, ShoppingBag, Home, User, Heart, Clock12 } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { ROUTES } from "../constants";

export const BottomNav = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(true);


  const navItems = [
    { id: "home", icon: Home, label: "Home", path: ROUTES.HOME },
    { id: "history", icon: Clock12, label: "History", path: ROUTES.HISTORY },
    { id: "orders", icon: ShoppingBag, label: "Orders", path: ROUTES.ORDERS },
    {
      id: "profile",
      icon: User,
      label: "Profile",
      path: isLoggedIn ? ROUTES.PROFILE : ROUTES.LOGIN,
    },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto flex justify-around p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center ${
                isActive ? "text-orange-500" : "text-gray-400"
              }`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
