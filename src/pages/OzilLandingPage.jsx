import React from "react";
import { FaCheck } from "react-icons/fa"; // Using Font Awesome check icon

// Import your product image - adjust path as needed
import productImageUrl from "../assets/images/ozil-facewash.png"; // Example path

function OzilLandingPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-t from-rose-gold via-rose-gold-light to-pearlescent-white p-6 md:p-12">
      {/* Optional: Subtle Bokeh Lights Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/30 rounded-full filter blur-2xl opacity-50 -z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-rose-gold/20 rounded-full filter blur-3xl opacity-60 -z-0"></div>
      <div className="absolute top-10 right-10 w-24 h-24 bg-white/20 rounded-full filter blur-xl opacity-40 -z-0"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-rose-gold/10 rounded-full filter blur-lg opacity-50 -z-0"></div>

      {/* Optional: Subtle Glowing Neon Lines (Example using pseudo-elements or border gradients if needed - simplified here) */}
      {/* You might need custom CSS or SVG for complex neon lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Example simple diagonal line */}
        <div className="absolute top-0 -left-1/4 w-1/2 h-full transform -skew-x-12 border-r-2 border-neon-pink/30 opacity-50"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full transform -skew-x-12 border-l-2 border-neon-cyan/30 opacity-50"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
        {/* Left Side: Product Image */}
        <div className="flex justify-center items-center order-1 md:order-1">
          <img
            src={productImageUrl} // Use the imported image URL
            alt="OZIL MAKEUP Rice Water Facewash"
            className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto rounded-lg
                       drop-shadow-xl  Standard drop shadow hover:shadow-glow-white transition-shadow duration-300 
                       transform 
                      hover:scale-105
                       "
            style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))" }} // More controlled shadow
          />
          {/* You could add a subtle glow effect here using box-shadow or pseudo-elements if needed */}
        </div>

        {/* Right Side: Text Content */}
        <div className="text-center md:text-left order-2 md:order-2">
          {/* Main Product Title */}
          <h1 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 mb-4 md:mb-6 leading-tight">
            RICE WATER <br className="hidden md:block" /> FACEWASH
          </h1>

          {/* Key Benefits */}
          <ul className="space-y-3 inline-block md:block text-left mx-auto md:mx-0 max-w-xs md:max-w-none">
            <li className="flex items-center space-x-3">
              <FaCheck className="text-rose-gold text-xl" />{" "}
              {/* Or use text-neon-pink */}
              <span className="font-montserrat font-medium text-base md:text-lg text-gray-700">
                Skin Lightening
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheck className="text-rose-gold text-xl" />
              <span className="font-montserrat font-medium text-base md:text-lg text-gray-700">
                Remove Acne & Pigmentation
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheck className="text-rose-gold text-xl" />
              <span className="font-montserrat font-medium text-base md:text-lg text-gray-700">
                Healthy Glow Skin
              </span>
            </li>
          </ul>

          {/* Optional Call to Action Button */}
          <div className="mt-8 md:mt-10">
            <button  className="bg-secondary text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OzilLandingPage;
