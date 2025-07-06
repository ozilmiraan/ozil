import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ProductAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left font-montserrat font-bold text-lg text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </button>
      {isOpen && <div className="mt-4 font-poppins text-gray-600">{children}</div>}
    </div>
  );
};

export default ProductAccordion;
