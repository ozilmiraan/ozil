import React from 'react';

const StickyFooterCTA = ({ onAddToCart, onBuyNow }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex md:hidden z-20">
      <button
        onClick={onAddToCart}
        className="w-1/2 py-3 px-4 bg-gradient-to-r from-gray-200 to-gray-100 text-gray-800 font-bold rounded-l-lg"
      >
        Add to Cart
      </button>
      <button
        onClick={onBuyNow}
        className="w-1/2 py-3 px-4 bg-secondary text-white font-bold rounded-r-lg"
      >
        Buy Now
      </button>
    </div>
  );
};

export default StickyFooterCTA;
