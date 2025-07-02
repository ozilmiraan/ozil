// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import OrderManagement from './OrderManagement';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-200 p-4">
        <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
        <ul>
          <li className="mb-2">
            <Link to="/admin/add-product" className="text-blue-500 hover:text-blue-700">
              Add Product
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/admin/products" className="text-blue-500 hover:text-blue-700">
              Product Management
            </Link>
          </li>
          <li>
            <Link to="/admin/orders" className="text-blue-500 hover:text-blue-700">
              Order Management
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <h1>Dashboard</h1>
        {/* Add dashboard content here */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Welcome to the Admin Dashboard</h2>
          <p className="mb-4">Here you can manage products, orders, and more.</p>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
          <h2 className="text-xl font-semibold mb-2">Recent Orders</h2>
          {/* Add recent orders or other dashboard widgets here */}
    <OrderManagement />

          <p className="mb-4">You can view and manage recent orders here.</p>
      </div>
      </div>
      </div>
  );
};

export default Dashboard;
