import React, { useState, useEffect } from 'react';
import { TopNav } from '../components/TopNav';
import { BottomNav } from '../components/BottomNav';
import OrderItemCard from '../components/OrderItemCard';
import { getOrderedItems, calculateTotalPrice, removeItemFromOrder, formatPrice } from '../utils/orderUtils';
import { useNavigate } from 'react-router-dom';

const Orders = () => {
  const navigate = useNavigate();
  const [orderedItems, setOrderedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const items = getOrderedItems();
    setOrderedItems(items);
    setTotalPrice(calculateTotalPrice(items));
  }, []);

  const handleRemoveItem = (itemId) => {
    removeItemFromOrder(itemId);
    setOrderedItems(prevItems => prevItems.filter(item => item.id !== itemId));
    setTotalPrice(prevTotal => 
      prevTotal - (orderedItems.find(item => item.id === itemId)?.price || 0)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <TopNav showBack={true} count={orderedItems.length} />
      
      <main className="pt-16 pb-20 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
          
          {orderedItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No items in your order</p>
              <button 
                onClick={() => navigate('/')}
                className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
              >
                Browse Restaurants
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {orderedItems.map((item) => (
                  <OrderItemCard 
                    key={item.id} 
                    item={item} 
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-medium">Total</span>
                  <span className="text-xl font-bold text-orange-500">{formatPrice(totalPrice)}</span>
                </div>
                <button 
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600"
                  onClick={() => navigate('/ttF')}
                >
                  Proceed to Payment
                </button>
              </div>
            </>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Orders;