import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RestaurantApp from './chaw';

import RestaurantDetails from './pages/RestuarantDetails';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RestaurantApp />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;