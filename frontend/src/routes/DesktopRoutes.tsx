import { Navigate, Route, Routes } from "react-router";

import DesktopHome from "../pages/desktop/DesktopHome";
import HomeScreen from "../pages/HomeScreen";
import ProductDetail from "../pages/ProductDetail";
import Explores from "../pages/Explores";
import Products from "../pages/Products";
import Favourites from "../pages/Favourites";
import MyCart from "../pages/MyCart";
import OrderAccepted from "../pages/OrderAccepted";
import Account from "../pages/Account";
import TrackOrder from "../pages/TrackOrder";
const DesktopRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DesktopHome />} />
      <Route path="/home" element={<HomeScreen />} />
          <Route path="/explore" element={<Explores />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/cart" element={<MyCart />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/account" element={<Account />} />
          <Route path="/order-accepted" element={<OrderAccepted />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default DesktopRoutes;
