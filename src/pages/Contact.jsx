import React from 'react';
import { FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-t from-rose-gold via-rose-gold-light to-pearlescent-white p-4 sm:p-6 md:p-12">
      {/* Subtle Bokeh Lights Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/30 rounded-full filter blur-2xl opacity-50 -z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-rose-gold/20 rounded-full filter blur-3xl opacity-60 -z-0"></div>
      <div className="absolute top-10 right-10 w-24 h-24 bg-white/20 rounded-full filter blur-xl opacity-40 -z-0"></div>
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-rose-gold/10 rounded-full filter blur-lg opacity-50 -z-0"></div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        {/* Left Side: Company Details */}
        <div className="text-center md:text-left">
          <h1 className="font-cinzel font-bold text-3xl sm:text-4xl text-rose-gold-dark mb-4">OZIL MAKEUP</h1>
          <p className="font-montserrat text-base sm:text-lg text-gray-700 mb-6">Presented by OZIL MIRAAN SOLUTIONS</p>
          <div className="space-y-4 text-sm sm:text-base">
            <p className="flex items-center justify-center md:justify-start font-poppins text-gray-600">
              <FaEnvelope className="text-rose-gold mr-3" />
              info@ozilmiraansolutions.com
            </p>
            <p className="flex items-center justify-center md:justify-start font-poppins text-gray-600">
              <FaPhone className="text-rose-gold mr-3" />
              +91 7696574044
            </p>
            <p className="flex items-center justify-center md:justify-start font-poppins text-gray-600">
              <FaGlobe className="text-rose-gold mr-3" />
              www.ozilmakeup.com
            </p>
            <p className="flex items-center justify-center md:justify-start font-poppins text-gray-600">
              <FaGlobe className="text-rose-gold mr-3" />
              www.ozilmiraansolutions.com
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full max-w-lg mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center font-montserrat text-gray-800">Contact Us</h1>
          <form className="bg-white/50  rounded-lg px-8 pt-6 pb-8 mb-4 backdrop-blur-sm">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input className="shadow-neumorphicInset appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input className="shadow-neumorphicInset appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea className="shadow-neumorphicInset appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-secondary text-white font-bold py-2 px-4 rounded transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105" type="button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
