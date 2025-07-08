/**
    // import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../assets/ozilmakeup_logo.png";
// import { useSelector } from 'react-redux';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faSearch, faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
// import CartSidebar from "./CartSidebar";

// const Navbar = ({ toggleCart }) => {
//   const [isProfileOpen, setIsProfileOpen] = React.useState(false);
//   const [isCartOpen, setIsCartOpen] = React.useState(false);
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
//   const cartItems = useSelector((state) => state.cart.items);

//   const toggleProfile = () => {
//     setIsProfileOpen(!isProfileOpen);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//     <nav className="px-4 py-2 flex justify-between text-gray-700 items-center relative">
//       <Link to="/" className="text-xl font-bold  rounded-50px bg-gradient-to-r  shadow-neumorphic p-2">
//         <img
//           src={Logo}
//           alt="Logo"
//           className="w-24 md:w-40"
//         />
//       </Link>
//       <div className="hidden md:flex items-center">
//         <div className="flex space-x-4 items-center font-bold text-md">
//           <Link to="/" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary  focus:text-secondary active:text-secondary">
//             Home
//           </Link>
//           <Link to="/contact" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
//             Contact
//           </Link>
//           <Link to="/about" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
//             About Us
//           </Link>
//           <Link to="/affiliate" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
//             Affiliate Program
//           </Link>
//           <Link to="/faq" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
//             FAQ
//           </Link>
//           <Link to="/blogs" className="bg-transparent   p-2  hover:rounded-50px hover:text-secondary">
//             Blogs
//           </Link>
//         </div>
//       </div>

//       <div className="flex items-center gap-2">
//         <button className="hidden md:block rounded-full bg-gradient-to-r shadow-neumorphic  hover:bg-secondary hover:text-secondary focus:bg-secondary focus:text-white p-2">
//           <FontAwesomeIcon icon={faSearch} className="h-4 w-6" />
//         </button>
//         <button
//           onClick={(e) => {
//             e.preventDefault();
//             setIsCartOpen(!isCartOpen);
//           }}
//           className=" relative rounded-full bg-gradient-to-r shadow-neumorphic hover:bg-secondary hover:text-secondary focus:bg-secondary focus:text-white p-2"
//         >
//           <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-6" />
//           {cartItems.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
//               {cartItems.length}
//             </span>
//           )}
//         </button>
//         <div className="relative hidden md:block">
//           <button onClick={toggleProfile} className=" text-center rounded-full bg-gradient-to-r shadow-neumorphic  hover:bg-secondary hover:text-secondary focus:bg-secondary focus:text-white p-2">
//             <FontAwesomeIcon icon={faUser} className="h-4 w-6" />
//           </button>
//           {isProfileOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-md z-10">
//               <Link
//                 to="/login"
//                 className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//               >
//                 Register
//               </Link>
//             </div>
//           )}
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-2xl">
//             <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
//           </button>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="absolute top-16 left-0 w-full bg-white shadow-md z-20 md:hidden">
//           <div className="flex flex-col items-center space-y-4 py-4">
//             <Link to="/" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>Home</Link>
//             <Link to="/contact" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>Contact</Link>
//             <Link to="/about" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>About Us</Link>
//             <Link to="/affiliate" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>Affiliate Program</Link>
//             <Link to="/faq" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>FAQ</Link>
//             <Link to="/blogs" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>Blogs</Link>
//             <div className="border-t w-full my-2"></div>
//             <Link to="/login" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>Login</Link>
//             <Link to="/register" className="bg-transparent p-2 hover:text-secondary" onClick={toggleMenu}>Register</Link>
//           </div>
//         </div>
//       )}
//     </nav>
 
//     <CartSidebar
//       isOpen={isCartOpen}
//       onClose={() => setIsCartOpen(false)}
//       className="fixed top-0 right-0 w-full md:w-96 h-screen bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto"
//     />
//   </>
//   );
// };

// export default Navbar;
  */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/ozilmakeup_logo.png";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faUser,
  faBars,
  faTimes,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = React.useState(false);
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.items);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="px-4 py-2 flex justify-between items-center relative text-gray-700">
        <Link
          to="/"
          className="text-xl font-bold rounded-50px bg-gradient-to-r shadow-neumorphic p-2"
        >
          <img src={Logo} alt="Logo" className="w-24 md:w-40" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center">
          <div className="flex space-x-4 items-center font-bold text-md">
            <Link to="/" className="bg-transparent p-2 hover:text-secondary">
              Home
            </Link>
            <Link
              to="/contact"
              className="bg-transparent p-2 hover:text-secondary"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="bg-transparent p-2 hover:text-secondary"
            >
              About Us
            </Link>
            <Link
              to="/affiliate"
              className="bg-transparent p-2 hover:text-secondary"
            >
              Affiliate Program
            </Link>
            <Link to="/faq" className="bg-transparent p-2 hover:text-secondary">
              FAQ
            </Link>
            <Link
              to="/blogs"
              className="bg-transparent p-2 hover:text-secondary"
            >
              Blogs
            </Link>
          </div>
        </div>

        {/* Top Right Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            
            className="hidden md:block p-2 rounded-full shadow-neumorphic hover:text-secondary"
            
          >
            <FontAwesomeIcon icon={faSearch} className="h-4 w-6" />
          </button>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative p-2 rounded-full shadow-neumorphic hover:text-secondary"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="h-4 w-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
                {cartItems.length}
              </span>
            )}
          </button>
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="p-2 rounded-full shadow-neumorphic hover:text-secondary"
            >
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

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {/* Hamburger Menu Content */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md z-20 md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4">
              <Link
                to="/affiliate"
                className="p-2 hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Affiliate Program
              </Link>
              <Link
                to="/contact"
                className="p-2 hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="p-2 hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/faq"
                className="p-2 hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/blogs"
                className="p-2 hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <div className="border-t w-full my-2"></div>
              <Link
                to="/login"
                className="p-2 hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="p-2 hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        className="fixed top-0 right-0 w-full md:w-96 h-screen bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto"
      />

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-inner z-50 flex justify-around items-center py-2 md:hidden border-t">
        <Link
          to="/"
          className="flex flex-col items-center text-xs"
          style={{ color: isActive("/") ? "#f53893" : "inherit" }}
        >
          <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
          Home
        </Link>
        <button
          onClick={() => setIsSearchModalOpen(true)}
          className="flex flex-col items-center text-xs"
          style={{ color: isSearchModalOpen ? "#f53893" : "inherit" }}
        >
          <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
          Search
        </button>
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="flex flex-col items-center text-xs relative"
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="h-5 w-5"
            style={{ color: isCartOpen ? "#f53893" : "inherit" }}
          />
          Cart
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1 text-[10px] -mt-1 -mr-2">
              {cartItems.length}
            </span>
          )}
        </button>
        <Link
          to="/login"
          className="flex flex-col items-center text-xs"
          style={{ color: isActive("/login") ? "#f53893" : "inherit" }}
        >
          <FontAwesomeIcon icon={faUser} className="h-5 w-5" />
          User
        </Link>
      </div>

      {/* Search Modal */}
      {isSearchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white w-11/12 max-w-md rounded-lg p-4 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setIsSearchModalOpen(false)}
            >
              <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
            </button>
            <h2 className="text-lg font-semibold mb-4 text-center">Search</h2>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f53893]"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
