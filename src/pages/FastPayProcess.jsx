import React, { useState } from 'react';
import { TopNav } from '../components/TopNav';
import { BottomNav } from '../components/BottomNav';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../constants';
import { CreditCard, Wallet, Building, ChevronRight, Shield } from 'lucide-react';

function FastPayProcess() {
  const { cartItems, getTotalPrice } = useCart();
  const [selectedMethod, setSelectedMethod] = useState('card');

  const paymentMethods = [
    { id: 'card', icon: CreditCard, label: 'Credit/Debit Card', description: 'Pay with your card' },
    { id: 'bank', icon: Building, label: 'Bank Transfer', description: 'Direct bank transfer' },
    { id: 'wallet', icon: Wallet, label: 'Wallet', description: 'Pay with your wallet balance' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <TopNav showBack={true} />
      
      <main className="pt-16 pb-20 max-w-4xl mx-auto px-4">
        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
                <p className="text-orange-500 font-medium">{formatPrice(item.price)}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium">{formatPrice(getTotalPrice())}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-500">Delivery Fee</span>
              <span className="font-medium">₦500</span>
            </div>
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <span className="font-medium">Total</span>
              <span className="text-xl font-bold text-orange-500">{formatPrice(getTotalPrice() + 500)}</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
          <h3 className="font-bold mb-4">Select Payment Method</h3>
          <div className="space-y-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border ${
                    selectedMethod === method.id 
                      ? 'border-orange-500 bg-orange-50' 
                      : 'border-gray-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedMethod === method.id ? 'bg-orange-100' : 'bg-gray-100'
                  }`}>
                    <Icon size={20} className={selectedMethod === method.id ? 'text-orange-500' : 'text-gray-500'} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-medium">{method.label}</h3>
                    <p className="text-sm text-gray-500">{method.description}</p>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Security Note */}
        <div className="bg-green-50 rounded-lg p-4 mb-4 flex items-center gap-3">
          <Shield className="text-green-500" />
          <p className="text-sm text-green-700">
            Your payment information is encrypted and secure
          </p>
        </div>

        {/* Pay Button */}
        <button 
          className="w-full bg-orange-500 text-white py-4 rounded-lg font-medium hover:bg-orange-600 transition-colors"
        >
          Pay {formatPrice(getTotalPrice() + 500)}
        </button>
      </main>

      <BottomNav />
    </div>
  );
}

export default FastPayProcess;
