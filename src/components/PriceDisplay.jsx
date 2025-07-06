import React from 'react';

const PriceDisplay = ({ originalPrice, currentPrice, discountPercentage }) => {
  return (
    <div className="flex items-center mb-4">
      {discountPercentage > 0 ? (
        <>
          <span className="text-gray-900 font-bold text-2xl">${currentPrice}</span>
          <span className="text-gray-500 line-through ml-2">${originalPrice}</span>
          <span className="text-green-500 ml-2">({discountPercentage}% off)</span>
        </>
      ) : (
        <span className="text-gray-900 font-bold text-2xl">${currentPrice}</span>
      )}
    </div>
  );
};

export default PriceDisplay;
