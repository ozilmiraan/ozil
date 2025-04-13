import React from 'react';

const AdminPanel = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Pending Artist Profiles</h2>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Placeholder for pending artist profiles */}
          <p className="text-gray-700">No pending artist profiles.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
