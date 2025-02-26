import { Search, ShoppingBag, Home, User, Heart, Clock12 } from 'lucide-react';

export const BottomNav = () => {
    const navItems = [
        { id: 'home', icon: Home, label: 'Home', isActive: true },
        { id: 'history', icon: Clock12, label: 'History', isActive: false },
        { id: 'orders', icon: ShoppingBag, label: 'Orders', isActive: false },
        { id: 'profile', icon: User, label: 'Profile', isActive: false }
      ];
    
    return(
        <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex justify-around p-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`flex flex-col items-center ${item.isActive ? 'text-orange-500' : 'text-gray-400'
                  }`}
              >
                <Icon size={24} />
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    )
}
