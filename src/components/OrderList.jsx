// src/components/OrderList.jsx
import React from 'react';
import StatusDropdown from './StatusDropdown';

const OrderList = () => {
  const orders = [
    {
      id: 1,
      customerName: 'John Doe',
      itemsCount: 2,
      totalPrice: 30.98,
      date: '2023-10-27',
      status: 'Order Placed',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      itemsCount: 1,
      totalPrice: 15.99,
      date: '2023-10-26',
      status: 'Shipping',
    },
  ];

  const handleStatusChange = (orderId, newStatus) => {
    // Handle status change here
    console.log(`Order ${orderId} status changed to ${newStatus}`);
  };

  return (
    <div>
      <h1>Order List</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Items Count</th>
            <th>Total Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.itemsCount}</td>
              <td>{order.totalPrice}</td>
              <td>{order.date}</td>
              <td>
                <StatusDropdown
                  status={order.status}
                  onChange={(newStatus) => handleStatusChange(order.id, newStatus)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
