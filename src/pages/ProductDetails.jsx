import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import products from "../data/products";

import ReviewCarousel from "../components/ReviewCarousel";
import ProductCard from "../components/ProductCard";
import CartSidebar from "../components/CartSidebar";
import LoginModal from "../components/LoginModal";
import PriceDisplay from "../components/PriceDisplay";
import { FaLeaf } from "react-icons/fa";
import ProductAccordion from "../components/ProductAccordion";
import { FaShippingFast } from "react-icons/fa";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // <-- Add this line

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [userMobileNumber, setUserMobileNumber] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product data based on productId
    const fetchProduct = async () => {
      const productData = products;

      setProduct(productData[productId] || null);
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    setSelectedImageIndex(0); // Reset to first image when product changes
  }, [productId]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLogin = (mobileNumber) => {
    // Simulate login
    console.log("User logged in with mobile number:", mobileNumber);
    // setIsLoggedIn(true);

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("mobileNumber", mobileNumber);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleImageClick = () => {
    setZoomedImage(!zoomedImage);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItem(product));
    setIsCartOpen(true);

  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    dispatch(addItem(product));
    navigate("/checkout"); // Assuming '/checkout' is the checkout page
  };

  if (!product) {
    return <div className="container mx-auto py-12">Product not found</div>;
  }

  return (
    <div className="container mx-auto py-12">
      <CartSidebar
        isOpen={isCartOpen}
        onClose={toggleCart}
        className="fixed top-0 right-0 w-96 h-screen bg-white shadow-md z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto"
      />
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Left Side: Product Image */}
        <div className="relative">
          <img
            src={product.productImages[selectedImageIndex]}
            alt={product.name}
            className={`w-full h-96 bg-gray-200 object-contain rounded-lg shadow-md transition-transform duration-300 ${
              zoomedImage
                ? "scale-150 transform-origin-top-left cursor-zoom-out"
                : "cursor-zoom-in"
            }`}
            onClick={handleImageClick}
          />
          {/* Carousel/Slideshow (Placeholder) */}
          <div className="flex mt-4 space-x-2">
            {product.productImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} - ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 ${
                  selectedImageIndex === index
                    ? "border-secondary"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Product Overview */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {product.name}
          </h1>
          {/* Short Description */}
          <p className="text-gray-700 text-sm mb-4">
            {product.shortDescription}
          </p>

          {/* Pricing Section */}
          <PriceDisplay
            originalPrice={product.originalPrice}
            currentPrice={product.currentPrice}
            discountPercentage={product.discountPercentage}
          />

          {/* Star Ratings & Review Count */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">★★★★★</span>
            <span className="text-gray-500">({product.averageRating} / 5)</span>
            <span className="text-gray-500 ml-2">
              ({product.reviewCount} Reviews)
            </span>
          </div>

          {/* Add to Cart & Buy Now Buttons */}
          <div className="flex space-x-4 mb-4">
            <button
              className="py-2 px-6 rounded-full hover:bg-primary-dark  bg-gradient-to-r shadow-neumorphic  hover:text-secondary transition-colors duration-300"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="bg-secondary text-white py-2 px-6 rounded-full  transition-colors duration-500  shadow-neumorphic hover:bg-secondary-dark hover:scale-110 "
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap space-x-2 mb-4">
            {product.keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-200 text-gray-800 py-1 px-3 rounded text-sm shadow-sm flex items-center gap-3"
              >
                <FaLeaf className="text-orange-400" />
                <p className="text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-8">
        {/* Left: Description & Accordions */}
        <div className="lg:col-span-2 space-y-6">
          <ProductAccordion title="How to Use">
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
              {product.usageInstructions.map((instruction, index) => (
                <li key={index} className="text-gray-600 text-sm mb-2">
                  {instruction}
                </li>
              ))}
            </ol>
          </ProductAccordion>

          <ProductAccordion title="Ingredients">
            {/* Ingredients & Product Benefits Section */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.ingredients.map((ingredient, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4">
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-16 h-16 object-cover rounded-full mb-2"
                  />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {ingredient.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {ingredient.description}
                  </p>
                </div>
              ))}
            </div>
          </ProductAccordion>

          <ProductAccordion title="Additional Details">
            <ul className="text-sm space-y-1">
              <li>
                <strong>Net Quantity:</strong> {product.netQuantity}
              </li>
              <li>
                <strong>MRP:</strong> ₹{product.originalPrice}
              </li>
              <li>
                <strong>Discounted Price:</strong> ₹{product.currentPrice}
              </li>
              <li>
                <strong>Country of Origin:</strong> {product.countryOfOrigin}
              </li>
              <li>
                <strong>Marketed By:</strong> {product.marketedBy}
              </li>
            </ul>
          </ProductAccordion>
        </div>

        {/* Right: Shipping */}
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
          <h3 className="font-bold text-lg flex items-center">
            <FaShippingFast className="text-orange-500 mr-2" /> Shipping &
            Returns
          </h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>✅ Free shipping above ₹499</li>
            <li>🚚 Delivery in 3–5 days</li>
            <li>🔁 7-day return (sealed items)</li>
          </ul>
          {/* Delivery Options */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Delivery Options
            </h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter pincode"
                className=" bg-slate-100 shadow-sm focus:ring-indigo-500 focus:border-pink-600 block w-full sm:text-sm border-gray-600 p-3 rounded mr-2"
                id="pincode"
              />
              <button
                className="bg-green-500 shadow-md text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={() => {
                  const pincode = document.getElementById("pincode").value;
                  if (pincode.startsWith("160")) {
                    alert("Delivery available in Chandigarh!");
                  } else {
                    alert("Delivery not available in this area.");
                  }
                }}
              >
                Check
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar & Recommended Products Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Similar & Recommended Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(products).map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              setIsCartOpen={setIsCartOpen}
              dispatch={dispatch}
            />
          ))}
        </div>
      </section>

      {/* Customer Reviews & Ratings Section */}
      <section className="mb-8">
        <ReviewCarousel products={products} />
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        {product.faq.map((faqItem, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">
              {faqItem.question}
            </h3>
            <p className="text-gray-600 text-sm">{faqItem.answer}</p>
          </div>
        ))}
      </section>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseLoginModal}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default ProductDetails;
