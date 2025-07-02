import React from "react";
import { Routes, Route } from "react-router-dom";
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

const AppRoutes = () => (
  <Routes>
        <Route path="/" element={<Layout />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/contact" element={<Contact />} />

    <Route path="/product/:productId" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/order-history" element={<OrderHistory />} />

    <Route path="/admin/dashboard" element={<Dashboard />} />
    <Route path="/admin/add-product" element={<AddProduct />} />
    <Route path="/admin/products" element={<ProductManagement />} />
    <Route path="/admin/orders" element={<OrderManagement />} />

    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default AppRoutes;
