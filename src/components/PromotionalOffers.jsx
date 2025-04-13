import React from 'react';

const PromotionalOffers = () => {
  return (
    <section className="promotional-banners py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Promotional Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-semibold mb-2">Special Offer 1</h3>
            <p>Get 10% off on bridal makeup.</p>
            <button className="bg-accent text-white py-2 px-4 rounded hover:bg-accent-dark mt-4">Claim Offer</button>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-semibold mb-2">Special Offer 2</h3>
            <p>Book a party makeup and get a free hairstyle.</p>
             <button className="bg-accent text-white py-2 px-4 rounded hover:bg-accent-dark mt-4">Claim Offer</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalOffers;
