import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-800">
        
        {/* Know Us Better Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Know Us Better</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-rose-500">About Us</a></li>
            <li><a href="#" className="hover:text-rose-500">Affiliate Program</a></li>
            <li><a href="#" className="hover:text-rose-500">FAQ</a></li>
            <li><a href="#" className="hover:text-rose-500">Blogs</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-rose-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-rose-500">Grievance Officer</a></li>
            <li><a href="#" className="hover:text-rose-500">Our Policies</a></li>
            <li><a href="#" className="hover:text-rose-500">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-rose-500">Terms Of Service</a></li>
          </ul>
        </div>

        {/* Available On Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Also Available On</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-rose-500">Nykaa</a></li>
            <li><a href="#" className="hover:text-rose-500">Amazon</a></li>
            <li><a href="#" className="hover:text-rose-500">Flipkart</a></li>
            <li><a href="#" className="hover:text-rose-500">Myntra</a></li>
            <li><a href="#" className="hover:text-rose-500">Purplle</a></li>
          </ul>
        </div>

        {/* Sign Up for Updates & Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-3">Sign Up For Updates</h3>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter Your Email" 
              className="border border-pink-300 text-sm px-3 py-2 w-full outline-none rounded-l-md"
            />
            <button className="bg-pink-500 text-white px-4 py-2 text-sm rounded-r-md hover:bg-pink-600 transition">
              SUBSCRIBE
            </button>
          </div>

          {/* Social Media Icons */}
          <h3 className="font-bold text-lg mt-5">Follow Us</h3>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-600 text-sm mt-8">
        © 2025 Ozil Miraan solutions Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
