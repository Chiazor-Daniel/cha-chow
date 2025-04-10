import React from 'react';
import { TopNav } from '../components/TopNav';
import { BottomNav } from '../components/BottomNav';
import { User, Settings, CreditCard, Bell, Shield, HelpCircle, LogOut } from 'lucide-react';

function Profile() {
  const menuItems = [
    { icon: Settings, label: 'Account Settings', description: 'Update your account information' },
    { icon: CreditCard, label: 'Payment Methods', description: 'Manage your payment options' },
    { icon: Bell, label: 'Notifications', description: 'Configure notification preferences' },
    { icon: Shield, label: 'Privacy & Security', description: 'Manage your privacy settings' },
    { icon: HelpCircle, label: 'Help & Support', description: 'Get help with your orders' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <TopNav showBack={true} />
      
      <main className="pt-16 pb-20 max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
              <User size={40} className="text-orange-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-500">+234 123 456 7890</p>
              <p className="text-gray-500">john.doe@example.com</p>
            </div>
          </div>
        </div>

        {/* Order Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <p className="text-2xl font-bold text-orange-500">12</p>
            <p className="text-gray-500 text-sm">Total Orders</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <p className="text-2xl font-bold text-orange-500">₦45,000</p>
            <p className="text-gray-500 text-sm">Total Spent</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 text-center">
            <p className="text-2xl font-bold text-orange-500">4.8</p>
            <p className="text-gray-500 text-sm">Avg. Rating</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-lg shadow-sm">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className={`w-full flex items-center gap-4 p-4 hover:bg-gray-50 ${
                  index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Icon size={20} className="text-orange-500" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-medium">{item.label}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </button>
            );
          })}

          {/* Logout Button */}
          <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 text-red-500 border-t border-gray-100">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <LogOut size={20} className="text-red-500" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-medium">Log Out</h3>
              <p className="text-sm text-gray-500">Sign out of your account</p>
            </div>
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default Profile;