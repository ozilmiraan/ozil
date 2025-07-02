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
    
    {/**<Route path="/home" element={<Home />} />      
      <Route path="/artists" element={<Artists />} />
      <Route path="/artist/:id" element={<ArtistProfile />} />
      <Route path="/booking" element={<Navigate to="/booking/service" />} />
      <Route path="/booking/*" element={<BookingFlow />} />
      <Route path="/booking/service" element={<Booking />} />
      <Route path="/booking/datetime" element={<Booking />} />
      <Route path="/booking/payment" element={<Booking />} />
      <Route path="/booking/confirmation" element={<Booking />} />
      <Route path="/artist-onboarding" element={<ArtistOnboarding />} /> 
      <Route path="/admin-panel" element={<AdminPanel />} />*/}

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
    <Route path="/" element={<Layout />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);

export default AppRoutes;
