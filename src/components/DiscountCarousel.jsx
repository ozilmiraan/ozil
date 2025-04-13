import React from 'react';

const DiscountCarousel = () => {
  return (
    <div className="relative">
      <div className="flex overflow-x-auto space-x-4 p-4">
        <div className="bg-white rounded-lg shadow-md w-80 flex-shrink-0 relative">
          <div className="absolute top-2 left-2 bg-gray-200 text-xs px-2 py-1 rounded">Limited time!</div>
          <img src="https://placekitten.com/300/200" alt="Discount 1" className="rounded-t-lg w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Get Special Discount</h3>
            <p className="text-3xl font-bold mb-2">Up to <span className="text-accent">40%</span></p>
            <p className="text-sm mb-2">All Salons available | T&C Applied</p>
            <button className="bg-accent text-white py-2 px-4 rounded hover:bg-accent-dark">Claim</button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md w-80 flex-shrink-0 relative">
          <div className="absolute top-2 left-2 bg-gray-200 text-xs px-2 py-1 rounded">Limited time!</div>
          <img src="https://placekitten.com/301/200" alt="Discount 2" className="rounded-t-lg w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Get Another Discount</h3>
            <p className="text-3xl font-bold mb-2">Up to <span className="text-accent">25%</span></p>
            <p className="text-sm mb-2">All Salons available | T&C Applied</p>
            <button className="bg-accent text-white py-2 px-4 rounded hover:bg-accent-dark">Claim</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
        <div className="w-2 h-2 bg-accent rounded-full mx-1"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
      </div>
    </div>
  );
};

export default DiscountCarousel;
