import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="w-full max-w-md mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-primary text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Company Details</h2>
          <p>Ozilmakeup Inc.</p>
          <p>123 Main Street, Anytown, India</p>
          <p>Email: info@ozilmakeup.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
