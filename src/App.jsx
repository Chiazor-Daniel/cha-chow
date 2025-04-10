import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import RestaurantApp from './chaw';
import RestaurantDetails from './pages/RestuarantDetails';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import FastPayProcess from './pages/FastPayProcess';
import History from './pages/History';
import { CartProvider } from './context/CartContext';
import { ROUTES } from './constants';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<RestaurantApp />} />
          <Route path={ROUTES.RESTAURANT} element={<RestaurantDetails />} />
          <Route path={ROUTES.ORDERS} element={<Orders />} />
          <Route path={ROUTES.HISTORY} element={<History />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.PAYMENT} element={<FastPayProcess />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;