import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import RestaurantApp from "./chaw";
import RestaurantDetails from "./pages/RestuarantDetails";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import FastPayProcess from "./pages/FastPayProcess";
import History from "./pages/History";
import LoginPage from "./pages/Login";
import { CartProvider } from "./context/CartContext";
import { ROUTES } from "./constants";
import SignupPage from "./pages/SignUp";
import FeaturedMeal from "./pages/FeaturedMeal";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<RestaurantApp />} />
          <Route path={ROUTES.RESTAURANT} element={<RestaurantDetails />} />
          <Route path={ROUTES.ORDERS} element={<Orders />} />
          <Route path={ROUTES.HISTORY} element={<History />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.FEATURED} element={<FeaturedMeal />} />
          <Route path={ROUTES.PAYMENT} element={<FastPayProcess />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
