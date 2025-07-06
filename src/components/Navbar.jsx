import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/ozilmakeup_logo.png";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import CartSidebar from "./CartSidebar";

const Navbar = ({ toggleCart }) => {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const cartItems = useSelector((state) => state.cart.items);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <nav className="px-4 py-2 flex justify-between text-gray-700 items-center relative">
      <Link to="/" className="text-xl font-bold  rounded-50px bg-gradient-to-r  shadow-neumorphic p-2">
        <img
          src={Logo}
          alt="Logo"
          className="w-24 md:w-40"
        />
      </Link>
      <div className="hidden md:flex items-center">
        <div className="flex space-x-4 items-center font-bold text-md">
          <Link to="/" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary  focus:text-secondary active:text-secondary">
            Home
          </Link>
          <Link to="/contact" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
            Contact
          </Link>
          <Link to="/about" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
            About Us
          </Link>
          <Link to="/affiliate" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
            Affiliate Program
          </Link>
          <Link to="/faq" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
            FAQ
          </Link>
          <Link to="/blogs" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
            Blogs
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="hidden md:block rounded-full bg-gradient-to-r shadow-neumorphic  hover:bg-secondary hover:text-secondary focus:bg-secondary focus:text-white p-2">
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
        <div className="relative hidden md:block">
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
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-20 md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link to="/" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>Home</Link>
            <Link to="/contact" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>Contact</Link>
            <Link to="/about" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>About Us</Link>
            <Link to="/affiliate" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>Affiliate Program</Link>
            <Link to="/faq" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>FAQ</Link>
            <Link to="/blogs" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>Blogs</Link>
            <div className="border-t w-full my-2"></div>
            <Link to="/login" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>Login</Link>
            <Link to="/register" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>Register</Link>
          </div>
        </div>
      )}
    </nav>
 
    <CartSidebar
      isOpen={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      className="fixed top-0 right-0 w-full md:w-96 h-screen bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto"
    />
  </>
  );
};

export default Navbar;
