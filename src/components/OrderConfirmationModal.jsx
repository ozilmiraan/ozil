import React from "react";
import { motion } from "framer-motion";
import { IndianRupee, CheckCircle, Download, History, XCircle } from "lucide-react";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

const OrderConfirmationModal = ({ isOpen, onClose, cartItems, subtotal, discount, finalAmount }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const generateInvoice = () => {
    const doc = new jsPDF();
    doc.text("Invoice", 10, 10);
    let y = 20;
    cartItems.forEach((item) => {
      doc.text(`${item.name} - Qty: ${item.quantity} - ₹${item.currentPrice}`, 10, y);
      y += 10;
    });
    doc.text(`Subtotal: ₹${subtotal.toFixed(2)}`, 10, y + 10);
    doc.text(`Discount: -₹${discount.toFixed(2)}`, 10, y + 20);
    doc.text(`Total: ₹${finalAmount.toFixed(2)}`, 10, y + 30);

    // TODO: Implement email invoice functionality using SendGrid
    doc.save("invoice.pdf");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-8 w-[90%] md:w-[50%] lg:w-[40%] xl:w-[30%] relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
      <div className="absolute top-2 right-2">
  <button
    className="text-gray-500 hover:text-gray-700 transition duration-300"
    onClick={onClose}
  >
    <XCircle className="w-6 h-6" />
  </button>
</div>

        <div className="flex justify-center items-center mb-4">
          <CheckCircle className="text-green-500 w-12 h-12 animate-bounce" />
        </div>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Order Confirmed!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Thank you for your purchase. Your order has been placed successfully!
        </p>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-2">Order Details:</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between text-gray-800">
              <p>{item.name} x {item.quantity}</p>
              <p>
                <IndianRupee className="inline-block w-4 h-4" /> {item.currentPrice}
              </p>
            </div>
          ))}
          <div className="border-t mt-3 pt-3">
            <p className="font-semibold flex justify-between">
              Subtotal: 
              <span>
                <IndianRupee className="inline-block w-4 h-4" /> {subtotal.toFixed(2)}
              </span>
            </p>
            <p className="flex justify-between">
              Discount: 
              <span>
                -<IndianRupee className="inline-block w-4 h-4" /> {discount.toFixed(2)}
              </span>
            </p>
            <p className="text-xl font-bold flex justify-between">
              Total Amount: 
              <span>
                <IndianRupee className="inline-block w-5 h-5" /> {finalAmount.toFixed(2)}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-between gap-3">
          <button
            className="flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
            onClick={generateInvoice}
          >
            <Download className="mr-2" /> Download Invoice
          </button>
          <button
            className="flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300"
            onClick={() => navigate("/order-history")}
          >
            <History className="mr-2" /> View Order History
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderConfirmationModal;
