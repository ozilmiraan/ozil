import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ca_1 from '../assets/ca_2.jpg';
import ca_2 from '../assets/ca_2.jpg';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    ca_1,
    ca_2,
    'https://placekitten.com/802/400',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero bg-gray-100 py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={images[currentImage]}
          alt={`Hero ${currentImage + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
          style={{ filter: 'brightness(60%)' }}
        />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold mb-4 text-black">Find Your Perfect Makeup Artist</h1>
        <p className="text-lg mb-8 text-black">Book professional makeup artists for weddings, parties, and photoshoots.</p>
        <Link to="/booking" className="bg-accent text-white py-2 px-6 rounded hover:bg-accent-dark">Book Now</Link>
      </div>
    </section>
  );
};

export default HeroSection;
