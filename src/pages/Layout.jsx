import React, { useState } from 'react';
// import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { addItem } from '../redux/cartSlice';
import products from '../data/products';
import CartSidebar from '../components/CartSidebar';
import LoginModal from '../components/LoginModal';
import ProductCard from '../components/ProductCard';
import ReviewCarousel from '../components/ReviewCarousel';
import OzilLandingPage from './OzilLandingPage';
import Assurance from '../components/Assurance';

const Layout = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(
  //   localStorage.getItem('isLoggedIn') === 'true'
  // );
  // const [userMobileNumber, setUserMobileNumber] = useState(
  //   localStorage.getItem('mobileNumber') || ''
  // );

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // const handleProceedToCheckout = () => {
  //   if (isLoggedIn) {
  //     navigate('/booking/payment');
  //   } else {
  //     setIsLoginModalOpen(true);
  //   }
  // };

  const handleLogin = (mobileNumber) => {
    // console.log('User logged in with mobile number:', mobileNumber);
    // setIsLoggedIn(true);
    // setUserMobileNumber(mobileNumber);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('mobileNumber', mobileNumber);
    setIsLoginModalOpen(false);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ overflow: 'hidden' }}>
      <CartSidebar
        isOpen={isCartOpen}
        onClose={toggleCart}
        className="fixed top-0 right-0 w-96 h-screen bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto"
      />

    <OzilLandingPage/>
      <section className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Beauty Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(products).map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              setIsCartOpen={setIsCartOpen}
              dispatch={dispatch}
            />
          ))}
        </div>
      </section>

      <section className="py-8">
        <ReviewCarousel products={products} />
      </section>

      <Assurance />
    

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseLoginModal}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Layout;
