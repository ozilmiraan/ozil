import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import products from '../data/products';
import CartSidebar from '../components/CartSidebar';
import LoginModal from '../components/LoginModal';
import ProductCard from '../components/ProductCard';
import ReviewCarousel from '../components/ReviewCarousel';

const Layout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );
  const [userMobileNumber, setUserMobileNumber] = useState(
    localStorage.getItem('mobileNumber') || ''
  );

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleProceedToCheckout = () => {
    if (isLoggedIn) {
      navigate('/booking/payment');
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLogin = (mobileNumber) => {
    console.log('User logged in with mobile number:', mobileNumber);
    setIsLoggedIn(true);
    setUserMobileNumber(mobileNumber);
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
      <section
        className="bg-[url(/src/assets/face-serum-hero-banner.jpg)] bg-center bg-cover bg-no-repeat py-20 text-white text-center"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Featured Product
          </h1>
          <p className="text-lg mt-4 text-primary">
            Check out our amazing featured product and get glowing skin!
          </p>
          <button className="bg-white text-primary py-2 px-8 rounded-full mt-8 font-semibold hover:bg-gray-100 transition-colors duration-300">
            Shop Now
          </button>
        </div>
      </section>

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

      <section className="py-0 relative z-50">
      <div className="bg-white py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen">
            
            {/* Left Column */}
            <div 
              className="h-full bg-cover bg-center overflow-visible"
              style={{ backgroundImage: 'url(images/Qc.png)' }}
            >
              <h3 className="text-gray-800 font-semibold text-2xl mb-6">Your Assurance of Safety and Compliance</h3>
              <p className="text-gray-600">
                Our business practices adhere to the legal and regulatory standards of the industry. 
                We maintain ethical and responsible practices to promote mutual benefits for all stakeholders.
              </p>
            </div>
    
            {/* Right Column */}
            <div className="text-center lg:text-left">
              <h4 className="text-gray-800 font-semibold text-xl mb-6">Customer Delight</h4>
              <p className="text-gray-600">
                We go above and beyond to ensure our customers' satisfaction, providing hassle-free services 
                and efficient product supply.
              </p>
            </div>
    
          </div>
        </div>
      </div>
    </section>
    

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseLoginModal}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Layout;
