import { Routes, Route } from "react-router-dom";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import OtpVerification from "./pages/auth/OtpVerification";

// Onboarding
import SelectCountry from "./pages/onboarding/SelectCountry";
import CreateStore from "./pages/onboarding/CreateStore";
import OnboardingComplete from "./pages/onboarding/OnboardingComplete";

// Dashboard
import Dashboard from "./pages/dashboard/Dashboard";

// Products
import Products from "./pages/products/Products";
import ProductCreate from "./pages/products/ProductCreate";
import ProductEdit from "./pages/products/ProductEdit";

// Orders
import Orders from "./pages/orders/Orders";
import OrderDetails from "./pages/orders/OrderDetails";

// Payments
import Transactions from "./pages/payments/Transactions";
import PendingPayments from "./pages/payments/PendingPayments";

// Store
import StoreHome from "./pages/store/StoreHome";
import StoreProducts from "./pages/store/StoreProducts";
import StoreProduct from "./pages/store/StoreProduct";
import Cart from "./pages/store/Cart";
import Checkout from "./pages/store/Checkout";
import OrderSuccess from "./pages/store/OrderSuccess";

// Customer
import CustomerLogin from "./pages/customer/CustomerLogin";
import CustomerOrders from "./pages/customer/CustomerOrders";
import CustomerOrderTracking from "./pages/customer/CustomerOrderTracking";

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verification" element={<OtpVerification />} />

      {/* Onboarding */}
      <Route path="/select-country" element={<SelectCountry />} />
      <Route path="/create-store" element={<CreateStore />} />
      <Route path="/onboarding-complete" element={<OnboardingComplete />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Products */}
      <Route path="/products" element={<Products />} />
      <Route path="/product-create" element={<ProductCreate />} />
      <Route path="/product-edit" element={<ProductEdit />} />

      {/* Orders */}
      <Route path="/orders" element={<Orders />} />
      <Route path="/order-details" element={<OrderDetails />} />

      {/* Payments */}
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/pending-payments" element={<PendingPayments />} />

      {/* Store */}
      <Route path="/store-home" element={<StoreHome />} />
      <Route path="/store-products" element={<StoreProducts />} />
      <Route path="/store-product" element={<StoreProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />

      {/* Customer */}
      <Route path="/customer-login" element={<CustomerLogin />} />
      <Route path="/customer-orders" element={<CustomerOrders />} />
      <Route
        path="/customer-order-tracking"
        element={<CustomerOrderTracking />}
      />
    </Routes>
  );
}

export default App;
