import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    navigate('/booking/payment');
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.currentPrice * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const discount = 0; // Implement discount logic if needed
  const finalAmount = subtotal - discount;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                <img src={item.productImages[0]} alt={item.name} className="w-full h-40 object-cover rounded-md mb-2" />
                <h2 className="text-xl font-semibold text-gray-700 mb-2">{item.name}</h2>
                <p className="text-gray-600">${item.currentPrice}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center">
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
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Price Calculation</h2>
            <div className="flex justify-between">
              <span className="text-gray-700">Subtotal:</span>
              <span className="text-gray-700">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Discount:</span>
              <span className="text-gray-700">${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-gray-700">Final Amount:</span>
              <span className="text-gray-700">${finalAmount.toFixed(2)}</span>
            </div>
            <button
              className="bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-dark transition-colors duration-300 mt-4"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
