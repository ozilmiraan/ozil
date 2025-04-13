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
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-300">
              Quick Buy
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            {data.name}
          </h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500 mr-1">★★★★★</span>
            <span className="text-gray-500">({data.averageRating} / 5)</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            {data.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-gray-900 font-bold">${data.currentPrice}</span>
            <div className="flex space-x-2">
              <button
                className=" py-2 px-4  hover:bg-primary-dark  rounded-full bg-gradient-to-r shadow-neumorphic  hover:text-secondary transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(addItem(data));
                  setIsCartOpen(true);
                }}
              >
                Add to Cart
              </button>
              <button
                className="bg-secondary text-white py-2 px-4 rounded-full  transition-colors duration-500  shadow-neumorphic hover:bg-secondary-dark hover:scale-110 "
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
