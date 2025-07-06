import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard';

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
};

const ReviewCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width] = useWindowSize();

  const getVisibleCount = () => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  const visibleCount = getVisibleCount();

  // Flatten all reviews from products
  const reviews = Object.values(products).flatMap(product => product.reviews);

  // Calculate the number of visible reviews
  const visibleReviews = reviews.slice(currentIndex, currentIndex + visibleCount);

  // Handle Next and Previous buttons
  const handleNext = () => {
    if (currentIndex < reviews.length - visibleCount) {
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
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center">Customer Reviews & Ratings</h2>
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 py-2 px-4 bg-secondary rounded-full hover:text-white disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            ◀
          </button>

          {/* Review Cards */}
          <div className="flex overflow-hidden space-x-4 w-full justify-center">
            {visibleReviews.map((review, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 py-2 px-4 bg-secondary text-center rounded-full hover:text-white disabled:opacity-50"
            disabled={currentIndex >= reviews.length - visibleCount}
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
