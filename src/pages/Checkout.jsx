import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import jsPDF from 'jspdf';
import { CheckCircle, CreditCard, Wallet, Truck, Banknote, IndianRupee } from "lucide-react";
import OrderConfirmationModal from '../components/OrderConfirmationModal';
import { useState } from 'react';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [city, setCity] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryAvailable, setDeliveryAvailable] = useState(null);

  const validatePincode = (pincode) => {
    // Basic pincode validation (6 digits)
    return /^\d{6}$/.test(pincode);
  };

  const checkDeliveryAvailability = async () => {
    if (!validatePincode(pincode)) {
      setDeliveryAvailable(false);
      return;
    }

    // Mock API call (replace with actual API endpoint)
    const availablePincodes = ['500080', '500081', '500082'];
    const isAvailable = availablePincodes.includes(pincode);

    setDeliveryAvailable(isAvailable);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.currentPrice * item.quantity,
      0
    );
  };

  const subtotal = calculateSubtotal();
  const discount = subtotal > 1000 ? subtotal * 0.1 : 0;
  const finalAmount = subtotal - discount;

  const handlePlaceOrder = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <motion.h1 
        className="text-3xl font-bold text-center mb-6 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Secure Checkout
      </motion.h1>

      <div className="flex gap-4">
        {/* Shipping Details */}
        <motion.div 
          className="w-1/3 p-6 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Truck className="text-green-500" /> Deliver to
          </h2>
          <div className="p-4 border rounded-md bg-gray-50">
            {/* Address Form */}
            
              <div className="mt-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                  Phone:
                </label>
                <input
                  type="text"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="pincode" className="block text-gray-700 text-sm font-bold mb-2">
                  Pincode:
                </label>
                <input
                  type="text"
                  id="pincode"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  onBlur={checkDeliveryAvailability}
                />
                {deliveryAvailable === true && (
                  <p className="text-green-500 mt-2">Delivery is available!</p>
                )}
                {deliveryAvailable === false && (
                  <p className="text-red-500 mt-2">Delivery is not available in this area.</p>
                )}
              </div>
              <div className="mt-4">
                <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              
            
            
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div 
          className="w-1/3 p-6 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CreditCard className="text-blue-500" /> Payment Methods
          </h2>
          <div className="p-4 border rounded-md bg-gray-50">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="payment"
                value="upi"
                className="mr-2"
                checked={paymentMethod === 'upi'}
                onChange={() => setPaymentMethod('upi')}
              />
              UPI
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="payment"
                value="debit-credit"
                className="mr-2"
                checked={paymentMethod === 'debit-credit'}
                onChange={() => setPaymentMethod('debit-credit')}
              />
              Debit/Credit Card
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="payment"
                value="wallet"
                className="mr-2"
                checked={paymentMethod === 'wallet'}
                onChange={() => setPaymentMethod('wallet')}
              />
              Wallet
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="payment"
                value="netbanking"
                className="mr-2"
                checked={paymentMethod === 'netbanking'}
                onChange={() => setPaymentMethod('netbanking')}
              />
              Netbanking
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="payment"
                value="cash-on-delivery"
                className="mr-2"
                checked={paymentMethod === 'cash-on-delivery'}
                onChange={() => setPaymentMethod('cash-on-delivery')}
              />
              Cash on Delivery
            </label>
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div 
          className="w-1/3 p-6 bg-white shadow-lg rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Wallet className="text-yellow-500" /> Order Summary
          </h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <img src={item.productImages[0]} alt={item.name} className="w-16 h-16 rounded-md" />
              <div>
                <p className="text-gray-800">{item.name}</p>
                <p className="text-gray-600">Qty: {item.quantity}</p>
                <p className="text-gray-800">₹{item.currentPrice}</p>
              </div>
            </div>
          ))}
          <div className="border-t mt-4 pt-2">
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>Discount: -₹{discount.toFixed(2)}</p>
            <p>Total: ₹{finalAmount.toFixed(2)}</p>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="bg-secondary text-white py-3 px-8 rounded-full mt-6 mb-6 hover:bg-green-600 w-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePlaceOrder}
      >
        Place Order
      </motion.button>

      <OrderConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        cartItems={cartItems}
        subtotal={subtotal}
        discount={discount}
        finalAmount={finalAmount}
      />
    </div>
  );
};

export default Checkout;
