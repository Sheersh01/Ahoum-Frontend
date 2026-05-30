import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import HomeScreen from "./pages/HomeScreen";
import Location from "./pages/Location";
import Login from "./pages/Login";
import Number from "./pages/Number";
import Onboarding from "./pages/Onboarding";
import ProductDetail from "./pages/ProductDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SplashScreen from "./pages/SplashScreen";
import Verification from "./pages/Verification";
import Explores from "./pages/Explores";
import Products from "./pages/Products";
import Favourites from "./pages/Favourites";
import MyCart from "./pages/MyCart";
import OrderAccepted from "./pages/OrderAccepted";
import Account from "./pages/Account";
import TrackOrder from "./pages/TrackOrder";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="max-w-7xl mx-auto min-h-screen">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/number" element={<Number />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/location" element={<Location />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
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
      </div>
    </BrowserRouter>
  );
};

export default App;
