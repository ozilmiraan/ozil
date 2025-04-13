import React from 'react';
import BookingFlow from '../components/booking/BookingFlow';

const Booking = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Book a Makeup Artist</h1>
      <BookingFlow />
    </div>
  );
};

export default Booking;
