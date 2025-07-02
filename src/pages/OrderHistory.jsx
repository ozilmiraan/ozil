import React, { useState } from "react";
import { motion } from "framer-motion";
import { IndianRupee, Download, Truck } from "lucide-react";
import jsPDF from 'jspdf';

const OrderHistory = () => {
  // Mock order data
  const orders = [
    {
      id: 1,
      date: "2025-03-25",
      products: [
        { name: "Face Serum", quantity: 1, price: 500 },
        { name: "Instant Glow Cream", quantity: 2, price: 300 },
      ],
      totalAmount: 1100,
      paymentMethod: "UPI",
      orderStatus: "Delivered",
      trackingNumber: "TRACK123",
    },
    {
      id: 2,
      date: "2025-03-20",
      products: [
        { name: "Nourishment Oil", quantity: 1, price: 400 },
      ],
      totalAmount: 400,
      paymentMethod: "Credit Card",
      orderStatus: "Shipped",
      trackingNumber: "TRACK456",
    },
  ];

  const [statusFilter, setStatusFilter] = useState("");

  const getStatusBadge = (status) => {
    const statusClasses = {
      Delivered: "bg-green-500",
      Shipped: "bg-blue-500",
      Pending: "bg-yellow-500",
      Cancelled: "bg-red-500",
    };
    return statusClasses[status] || "bg-gray-500";
  };

  const downloadInvoice = (order) => {
    const doc = new jsPDF();
    doc.text(`Invoice - Order #${order.id}`, 10, 10);
    let y = 20;
    order.products.forEach((product) => {
      doc.text(`${product.name} x ${product.quantity} - ₹${product.price}`, 10, y);
      y += 10;
    });
    doc.text(`Total Amount: ₹${order.totalAmount}`, 10, y + 10);
    doc.text(`Payment Method: ${order.paymentMethod}`, 10, y + 20);
    doc.text(`Order Status: ${order.orderStatus}`, 10, y + 30);
    doc.save(`invoice_order_${order.id}.pdf`);
  };

  const filteredOrders = statusFilter
    ? orders.filter((order) => order.orderStatus === statusFilter)
    : orders;

  return (
    <div className="container mx-auto mt-8">
      <motion.h1
        className="text-3xl font-bold text-center mb-6 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Order History
      </motion.h1>

      {/* Filter by Order Status */}
      <div className="mb-4 flex justify-center">
        <label htmlFor="statusFilter" className="mr-2">Filter by Status:</label>
        <select
          id="statusFilter"
          className="border rounded px-2 py-1"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Delivered">Delivered</option>
          <option value="Shipped">Shipped</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      {filteredOrders.map((order) => (
        <motion.div
          key={order.id}
          className="bg-white shadow-lg rounded-lg p-6 mb-4 transition hover:shadow-xl relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-white text-sm ${getStatusBadge(order.orderStatus)}`}>
            {order.orderStatus}
          </div>
          <h2 className="text-xl font-semibold mb-2">
            Order #{order.id} - {order.date}
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Order Details:</h3>
            <p>Order ID: {order.id}</p>
            {order.products.map((product, index) => (
              <p key={index}>
                {product.name} x {product.quantity} - <IndianRupee className="inline-block w-4 h-4" />
                {product.price}
              </p>
            ))}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-semibold">
                  Total Amount: <IndianRupee className="inline-block w-4 h-4" />
                  {order.totalAmount}
                </p>
                <p>Payment Method: {order.paymentMethod}</p>
                {order.trackingNumber && (
                  <p>Tracking Number: {order.trackingNumber}</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center gap-2"
              onClick={() => downloadInvoice(order)}
            >
              <Download className="w-4 h-4" /> Download Invoice
            </button>
            {order.trackingNumber && (
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center gap-2"
              >
                <Truck className="w-4 h-4" /> Track Order
              </button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OrderHistory;
