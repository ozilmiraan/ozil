import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addItem } from '../redux/cartSlice';

const ProductCard = ({ data,  dispatch, setIsCartOpen }) => {
  // console.log(data);
  const navigate = useNavigate();

  return (
    
      <Link to={`/product/${data.id}`} key={data.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 block">
        <div className="relative">
          <img
            src={data.productImages[0]}
            alt={data.name}
            className="w-full h-48 object-cover"
          />

        </div>
        <div className="p-3 sm:p-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 truncate">
            {data.name}
          </h3>
          <div className="flex items-center mb-2 text-xs sm:text-sm">
            <span className="text-yellow-500 mr-1">★★★★★</span>
            <span className="text-gray-500">({data.averageRating} / 5)</span>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm mb-4 h-10 overflow-hidden">
            {data.shortDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <span className="text-gray-900 font-bold text-base sm:text-lg mb-2 sm:mb-0">${data.currentPrice}</span>
            <div className="flex space-x-2">
              <button
                className="py-1 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm hover:bg-primary-dark rounded-full bg-gradient-to-r shadow-neumorphic hover:text-secondary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addItem(data));
                  setIsCartOpen(true);
                }}
              >
                Add to Cart
              </button>
              <button
                className="bg-secondary text-white py-1 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm rounded-full transform hover:scale-105 transition-colors duration-500 shadow-neumorphic hover:bg-secondary-dark"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addItem(data));
                  navigate('/checkout');
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </Link>
    
  );
};

export default ProductCard;
