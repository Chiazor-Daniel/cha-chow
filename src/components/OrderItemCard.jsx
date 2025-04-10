import React from 'react';
import { Trash2 } from 'lucide-react';
import { formatPrice } from '../utils/orderUtils';

const OrderItemCard = ({ item, onRemove }) => {
  return (
    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
        <p className="text-orange-500 font-medium mt-1">{formatPrice(item.price)}</p>
      </div>
      <button 
        onClick={() => onRemove(item.id)}
        className="p-2 text-red-500 hover:bg-red-50 rounded-full"
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default OrderItemCard; 