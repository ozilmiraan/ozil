import {
  createBrowserRouter,
} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import Layout from "../pages/Layout";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import OrderHistory from "../pages/OrderHistory";
import AddProduct from "../pages/AddProduct";
import ProductManagement from "../pages/ProductManagement";
import OrderManagement from "../pages/OrderManagement";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error404 />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "contact", element: <Contact /> },
      { path: "product/:productId", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order-history", element: <OrderHistory /> },

      // Admin routes
      { path: "admin/dashboard", element: <Dashboard /> },
      { path: "admin/add-product", element: <AddProduct /> },
      { path: "admin/products", element: <ProductManagement /> },
      { path: "admin/orders", element: <OrderManagement /> },
      {path: "", element: <Layout />}
    ],
  },
]);

export default router;
