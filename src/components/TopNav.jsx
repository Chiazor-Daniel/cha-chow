import { Search, ShoppingBag } from "lucide-react"
import { ArrowLeft, Heart } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { useCart } from '../context/CartContext';
import { ROUTES } from '../constants';

export const TopNav = ({ showBack, title }) => {
  const navigate = useNavigate();
  const { cartCount } = useCart();

  return (
    showBack ? (
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <ArrowLeft 
                className="text-gray-700 cursor-pointer" 
                size={24} 
                onClick={() => navigate(ROUTES.HOME)} 
              />
              <h1 className="text-xl font-semibold">{title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <Heart className="text-gray-700 cursor-pointer" size={24} />
              <div className="relative">
                <ShoppingBag 
                  className="text-gray-700 cursor-pointer" 
                  size={24} 
                  onClick={() => navigate(ROUTES.ORDERS)}
                />
                {cartCount > 0 && (
                  <span className="bg-red-600 rounded-full w-5 text-sm h-5 text-white font-bold absolute -top-2 -right-2 text-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <header className="bg-white shadow-sm p-4 fixed top-0 w-full z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="text-orange-500 text-2xl font-bold">Cha Chaw</h1>
          <div className="relative flex-1 mx-4">
            <input
              type="text"
              placeholder="Search restaurants or dishes..."
              className="w-full p-2 pl-10 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="relative">
            <ShoppingBag 
              className="text-gray-700 cursor-pointer" 
              size={24} 
              onClick={() => navigate(ROUTES.ORDERS)}
            />
            {cartCount > 0 && (
              <span className="bg-red-600 rounded-full w-5 text-sm h-5 text-white font-bold absolute -top-2 -right-2 text-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </header>
    )
  );
};