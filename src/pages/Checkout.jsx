import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import jsPDF from 'jspdf';
import { CheckCircle, CreditCard, Wallet, Truck, Banknote, IndianRupee } from "lucide-react";
import OrderConfirmationModal from '../components/OrderConfirmationModal';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
            <p className="text-gray-800 font-semibold">Deepak Tayde</p>
            <p>Flat 402 Shreedevi Nilayam</p>
            <p>Ayappa Society, Madhapur, Hyderabad</p>
            <p>Telangana, 500080</p>
            <button className="text-blue-500 mt-2">Edit</button>
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
              <input type="radio" name="payment" className="mr-2" /> UPI
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="payment" className="mr-2" /> Debit/Credit Card
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="payment" className="mr-2" /> Wallet
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="payment" className="mr-2" /> Netbanking
            </label>
            <label className="flex items-center mb-2">
              <input type="radio" name="payment" className="mr-2" /> Cash on Delivery
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
