// src/components/StatusDropdown.jsx
import React from 'react';

const StatusDropdown = ({ status, onChange }) => {
  const statuses = [
    'Order Placed',
    'Packing',
    'Shipping',
    'Out for Delivery',
    'Delivered',
  ];

  return (
    <select value={status} onChange={(e) => onChange(e.target.value)}>
      {statuses.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
};

export default StatusDropdown;
