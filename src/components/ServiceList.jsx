import React from 'react';
import { Link } from 'react-router-dom';

const ServiceList = ({ services }) => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Services</h2>
          <Link to="/services" className="text-accent hover:underline">See All</Link>
        </div>
        <div className="flex space-x-6 overflow-x-auto">
          {services.map((service, index) => (
            <Link key={index} to={`/booking?service=${service.name}`} className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <p className="mt-2 text-center">{service.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
