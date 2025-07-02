import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import products from '../data/products';

import ReviewCarousel from '../components/ReviewCarousel';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import LoginModal from '../components/LoginModal';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
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

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // const handleProceedToCheckout = () => {
  //   if (isLoggedIn) {
  //     navigate('/booking/payment');
  //   } else {
  //     setIsLoginModalOpen(true);
  //   }
  // };

  const handleLogin = (mobileNumber) => {
    // Simulate login
    console.log('User logged in with mobile number:', mobileNumber);
    // setIsLoggedIn(true);

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('mobileNumber', mobileNumber);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleImageClick = () => {
    setZoomedImage(!zoomedImage);
  };

  const handleAddToCart = () => {
    dispatch(addItem(product));
    alert('Product added to cart successfully!');
  };

  const handleBuyNow = () => {
    dispatch(addItem(product));
    navigate('/booking/payment'); // Assuming '/checkout' is the checkout page
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
            src={product.productImages[0]}
            alt={product.name}
            className={`w-full h-96 object-cover rounded-lg shadow-md transition-transform duration-300 ${
              zoomedImage ? 'scale-150 transform-origin-top-left cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={handleImageClick}
          />
          {/* Carousel/Slideshow (Placeholder) */}
          <div className="flex mt-4 space-x-2">
            {product.productImages.map((image, index) => (
              <img key={index} src={image} alt={`${product.name} - ${index + 1}`} className="w-20 h-20 object-cover rounded-md cursor-pointer" />
            ))}
          </div>
        </div>

        {/* Right Side: Product Overview */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.shortDescription}</p>

          {/* Pricing Section */}
          <div className="flex items-center mb-4">
            {product.discountPercentage > 0 && (
              <>
                <span className="text-gray-500 line-through mr-2">${product.originalPrice}</span>
                <span className="text-red-500 font-bold mr-2">${product.currentPrice}</span>
                <span className="text-green-500">({product.discountPercentage}% off)</span>
              </>
            )}
            {product.discountPercentage === 0 && (
              <span className="text-gray-900 font-bold">${product.currentPrice}</span>
            )}
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
              <span key={index} className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm">{benefit}</span>
            ))}
          </div>

          {/* Star Ratings & Review Count */}
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">★★★★★</span>
            <span className="text-gray-500">({product.averageRating} / 5)</span>
            <span className="text-gray-500 ml-2">({product.reviewCount} Reviews)</span>
          </div>

          {/* Delivery Options */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Delivery Options</h2>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter pincode"
                className="shadow-md bg-slate-100 focus:ring-indigo-500 focus:border-pink-600 block w-full sm:text-sm border-gray-600 p-3 rounded-full mr-2"
                id="pincode"
              />
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                onClick={() => {
                  const pincode = document.getElementById('pincode').value;
                  if (pincode.startsWith('160')) {
                    alert('Delivery available in Chandigarh!');
                  } else {
                    alert('Delivery not available in this area.');
                  }
                }}
              >
                Check
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients & Product Benefits Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.ingredients.map((ingredient, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <img src={ingredient.image} alt={ingredient.name} className="w-16 h-16 object-cover rounded-full mb-2" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{ingredient.name}</h3>
              <p className="text-gray-600 text-sm">{ingredient.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Instructions Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Usage Instructions</h2>
        <ol className="list-decimal list-inside">
          {product.usageInstructions.map((instruction, index) => (
            <li key={index} className="text-gray-600 text-sm mb-2">{instruction}</li>
          ))}
        </ol>
      </section>

      {/* Customer Reviews & Ratings Section */}
      <section className="mb-8">
        <ReviewCarousel products={products} />
      </section>

      {/* Similar & Recommended Products Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Similar & Recommended Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(products).map((product) => (
            <ProductCard key={product.id} data={product} setIsCartOpen={setIsCartOpen} dispatch={dispatch} />

          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        {product.faq.map((faqItem, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-700">{faqItem.question}</h3>
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
