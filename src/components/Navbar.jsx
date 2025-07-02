import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ozilmakeup_logo.png";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import CartSidebar from "./CartSidebar";

const Navbar = ({ toggleCart }) => {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  
  const cartItems = useSelector((state) => state.cart.items);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <>
    <nav className=" px-4 py-2 flex justify-between text-gray-700 items-center">
      <Link to="/" className="text-xl font-bold  rounded-50px bg-gradient-to-r  shadow-neumorphic p-2">
        <img
          src={Logo}
          alt="Logo"
          width="150"
          height="40"
        />
      </Link>
      <div className="flex items-center">
        <div className="flex space-x-4 items-center font-bold text-md">
          <Link to="/" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary  focus:text-secondary active:text-secondary">
            Home
          </Link>
          {/**          <Link to="/artists" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
            Artists
          </Link>
          <Link to="/booking" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
            Booking
          </Link> */}
          <Link to="/contact" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
            Contact
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded-full bg-gradient-to-r shadow-neumorphic  hover:bg-secondary hover:text-secondary focus:bg-secondary focus:text-white p-2">
          <FontAwesomeIcon icon={faSearch} className="h-4 w-6" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsCartOpen(!isCartOpen);
          }}
          className=" relative rounded-full bg-gradient-to-r shadow-neumorphic hover:bg-secondary hover:text-secondary focus:bg-secondary focus:text-white p-2"
        >
          <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-6" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
              {cartItems.length}
            </span>
          )}
        </button>
        <div className="relative">
          <button onClick={toggleProfile} className=" text-center rounded-full bg-gradient-to-r shadow-neumorphic  hover:bg-secondary hover:text-secondary focus:bg-secondary focus:text-white p-2">
            <FontAwesomeIcon icon={faUser} className="h-4 w-6" />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md z-10">
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
 
    <CartSidebar
      isOpen={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      className="fixed top-0 right-0 w-96 h-screen bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto"
    />
  </>
  );
};

export default Navbar;
