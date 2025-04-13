import React, { useState } from 'react';
import ReviewCard from './ReviewCard';

const ReviewCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Flatten all reviews from products
  const reviews = Object.values(products).flatMap(product => product.reviews);

  // Calculate the number of visible reviews (max 3)
  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  // Handle Next and Previous buttons
  const handleNext = () => {
    if (currentIndex < reviews.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Reviews & Ratings</h2>
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 py-2 px-4 bg-secondary  rounded-full hover:text-white disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            ◀
          </button>

          {/* Review Cards */}
          <div className="flex overflow-hidden space-x-4 w-full justify-center">
            {visibleReviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 py-2 px-4 bg-secondary text-center rounded-full hover:text-white disabled:opacity-50"
            disabled={currentIndex >= reviews.length - 3}
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
