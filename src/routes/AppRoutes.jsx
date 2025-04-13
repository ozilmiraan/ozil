import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Artists from '../pages/Artists';
import ArtistProfile from '../pages/ArtistProfile';
import Booking from '../pages/Booking';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import Error404 from '../pages/Error404';
import BookingFlow from '../components/booking/BookingFlow';
import ArtistOnboarding from '../pages/ArtistOnboarding';
import AdminPanel from '../pages/AdminPanel';
import Layout from '../pages/Layout';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import OrderHistory from '../pages/OrderHistory';

const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/home" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artist/:id" element={<ArtistProfile />} />
      <Route path="/booking" element={<Navigate to="/booking/service" />} />
      <Route path="/booking/*" element={<BookingFlow />} />
      <Route path="/booking/service" element={<Booking />} />
      <Route path="/booking/datetime" element={<Booking />} />
      <Route path="/booking/payment" element={<Booking />} />
      <Route path="/booking/confirmation" element={<Booking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/artist-onboarding" element={<ArtistOnboarding />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-history" element={<OrderHistory />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
);

export default AppRoutes;
