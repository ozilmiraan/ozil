import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ReviewCard from "./ReviewCard"; // adjust as needed

const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
  const reviews = Object.values(products).flatMap((product) => product.reviews);

  // Calculate the number of visible reviews
  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + visibleCount
  );

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
      <div className="container mx-auto px-1">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center">
          Customer Reviews & Ratings
        </h2>
        <div className="relative flex items-center justify-center">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            navigation
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
            }}
            className="!px-6"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="h-full">
                  <ReviewCard review={review} index={index} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons (optional override style) */}
          <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 px-4 transform -translate-y-1/2 z-10 pointer-events-none">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="swiper-button-prev pointer-events-auto bg-secondary text-white rounded-full p-3 shadow-lg hover:scale-105 transition"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= reviews.length - visibleCount}
              className="swiper-button-next pointer-events-auto bg-secondary text-white rounded-full p-3 shadow-lg hover:scale-105 transition"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
