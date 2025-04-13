import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity, addItem } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import products from '../data/products';
import LoginModal from './LoginModal';

const CartSidebar = ({ isOpen, onClose }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMobileNumber, setUserMobileNumber] = useState('');
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    const storedMobileNumber = localStorage.getItem('mobileNumber');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
      setUserMobileNumber(storedMobileNumber || '');
    }
  }, []);

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrementQuantity = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };

 const handleProceedToCheckout = () => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
      navigate('/checkout');
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleLogin = (mobileNumber) => {
    // Simulate login
    console.log('User logged in with mobile number:', mobileNumber);
    setIsLoggedIn(true);
    setUserMobileNumber(mobileNumber);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('mobileNumber', mobileNumber);
    // TODO: Implement proper authentication here
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.currentPrice * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const discount = subtotal > 1000 ? subtotal * 0.1 : 0;
  const finalAmount = subtotal - discount;

  const suggestedProducts = Object.values(products).slice(0, 2);

  const calculateDiscountProgress = () => {
    const targetAmount = 50;
    const progress = Math.min(1, subtotal / targetAmount);
    return progress * 100;
  };

  const discountProgress = calculateDiscountProgress();

  if (!isOpen) {
    return null;
  }

  return (
    <>
    <div className="fixed top-0 right-0 w-96 h-screen bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">Your Cart ({cartItems.length})</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Promotional Offer */}
      <div className="p-4 ">
        <div className="bg-pink-100 rounded-md shadow-neumorphic p-3 text-sm">
          Shop for Rs. 50 to get FLAT Rs.100 OFF!
          <div className="flex items-center mt-2">
            <div className="w-1/3 bg-pink-200 h-2 rounded-full">
              <div
                className="bg-pink-500 h-2 rounded-full"
                style={{ width: `${discountProgress}%` }}
              ></div>
            </div>
            <div className="flex justify-between w-full text-xs text-gray-600 px-2">
              <span>Rs.100 OFF</span>
              <span>Rs.200 OFF + 1 Gift</span>
              <span>Rs.300 OFF + 2 Gifts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Items */}
      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center p-4">Your cart is empty.</p>
      ) : (
        <div className="p-4 overflow-y-auto" style={{ maxHeight: '300px' }}>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <img src={item.productImages[0]} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
                <p className="text-gray-600">₹{item.currentPrice}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="bg-gray-200 text-gray-700 py-1 px-3 rounded-l"
                    onClick={() => handleDecrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="text-gray-700 px-2">{item.quantity}</span>
                  <button
                    className="bg-gray-200 text-gray-700 py-1 px-3 rounded-r"
                    onClick={() => handleIncrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="text-red-500 hover:text-red-700 ml-auto"
                onClick={() => handleRemoveItem(item.id)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Unlock Free Serum */}
      <div className="p-4 border-t">
        <div className="flex items-center">
          {/* Gift Icon */}
          <svg className="w-8 h-8 text-pink-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-12H4" />
          </svg>
          <div>
            <p className="text-gray-700 text-sm">Unlock Free Serum On Rs.999</p>
          </div>
        </div>
      </div>

      {/* Complete Your Routine */}
      <div className="p-4 border-t">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Complete Your Routine</h3>
        <div className="flex overflow-x-auto">
          {suggestedProducts.map((product) => (
            <div key={product.id} className="w-32 mr-4 mb-4">
              <img src={product.productImages[0]} alt={product.name} className="w-full h-24 object-cover rounded-md mb-2" />
              <p className="text-gray-700 text-sm">{product.name}</p>
              <p className="text-gray-600 text-sm">₹{product.currentPrice}</p>
              <button
                className="bg-gradient-to-r shadow-neumorphic p-2 hover:text-secondary py-1 px-3 rounded-full text-xs mt-1 w-full"
                onClick={() => dispatch(addItem(product))}
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Price Calculation */}
      <div className="p-4 border-t">
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Subtotal:</span>
          <span className="text-gray-700">₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-700">Discount:</span>
          <span className="text-gray-700">₹{discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span className="text-gray-700">Total:</span>
          <span className="text-gray-700">₹{finalAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="p-4 border-t">
        <button
          className="bg-secondary  text-white py-2 px-6 rounded-full hover:shadow-neumorphic transition-colors duration-300 w-full"
          onClick={handleProceedToCheckout}
        >
          Checkout Now →
        </button>
        <p className="text-green-700  text-xs mt-1 text-center">Extra 5% off on Prepaid Order</p>
      </div>
    </div>

    <LoginModal
    isOpen={isLoginModalOpen}
    onClose={handleCloseLoginModal}
    onLogin={handleLogin}
  />
    </>

  );
};

export default CartSidebar;
