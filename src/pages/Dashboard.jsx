import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">User Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Manage Bookings</h2>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-semibold">Upcoming Booking:</p>
          <p>Date: 2024-03-15</p>
          <p>Service: Bridal Makeup</p>
        </div>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <p className="font-semibold">Past Booking:</p>
          <p>Date: 2024-02-20</p>
          <p>Service: Party Makeup</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Profile Settings</h2>
        <p>Manage your profile information here.</p>
        <div className="flex space-x-4">
            <Link to="/admin-panel" className="bg-neutral text-white py-2 px-4 rounded hover:bg-neutral-dark">Admin Panel</Link>
            <Link to="/artist-onboarding" className="bg-neutral text-white py-2 px-4 rounded hover:bg-neutral-dark">Artist Onboarding</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
