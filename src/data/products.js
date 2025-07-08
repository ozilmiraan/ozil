
import Face from '../assets/face-serum.jpg';
import Glow from '../assets/instant-glow.jpg';
import Nourishment from '../assets/nourishment.jpg';


const products = {

  1: {
    id: 1,
    name: 'Facial Kit',
    category: 'Skincare',
    shortDescription: 'A complete facial kit for glowing skin.',
    originalPrice: 49.99,
    currentPrice: 39.99,
    discountPercentage: 20,
    keyBenefits: ['Instant Glow', 'De-Tan', 'Deep Nourishment'],
    averageRating: 4.5,
    reviewCount: 123,
    ingredients: [
      { name: 'Aloe Vera', description: 'Soothes and hydrates the skin', image: '/assets/aloe-vera.png' },
      { name: 'Vitamin C', description: 'Brightens and evens skin tone', image: '/assets/vitamin-c.png' },
    ],
    usageInstructions: [
      'Apply a small amount to face and neck',
      'Massage gently until absorbed',
      'Use daily for best results',
    ],
    reviews: [
      { author: 'User 1', comment: 'Great product!', rating: 5, verifiedPurchase: true, profileImage: 'https://i.pravatar.cc/150?img=1' },
      { author: 'User 2', comment: 'I love it!', rating: 4, verifiedPurchase: false, profileImage: 'https://i.pravatar.cc/150?img=2' },
    ],
    similarProducts: [
      { id: 4, name: 'Product 4', image: '/assets/product4.png', price: 29.99 },
      { id: 5, name: 'Product 5', image: '/assets/product5.png', price: 34.99 },
    ],
    faq: [
      { question: 'Is this product suitable for sensitive skin?', answer: 'Yes, it is formulated to be gentle on sensitive skin.' },
      { question: 'What is the shelf life of this product?', answer: 'The shelf life is 12 months after opening.' },
    ],
    productImages: [
      Face,
      Glow,
      Nourishment,
    ],
  },
  2: {
    id: 2,
    name: 'De-Tan Kit',
    shortDescription: 'Remove tan and brighten your skin with our effective de-tan kit.',
    originalPrice: 59.99,
    currentPrice: 49.99,
    discountPercentage: 17,
    keyBenefits: ['De-Tan', 'Brightening', 'Exfoliation'],
    averageRating: 4.0,
    reviewCount: 87,
    ingredients: [
      { name: 'Lemon Extract', description: 'Natural bleaching agent', image: '/assets/lemon.png' },
      { name: 'Turmeric', description: 'Antiseptic and anti-inflammatory', image: '/assets/turmeric.png' },
    ],
    usageInstructions: [
      'Apply a thick layer to tanned areas',
      'Leave on for 15-20 minutes',
      'Rinse off with cold water',
    ],
    reviews: [
      { author: 'User 3', comment: 'Works wonders on my tan!', rating: 4, verifiedPurchase: true, profileImage: 'https://i.pravatar.cc/150?img=3' },
      { author: 'User 4', comment: 'Good product, but takes time', rating: 3, verifiedPurchase: false,  profileImage: 'https://i.pravatar.cc/150?img=4' },
    ],
    similarProducts: [
      { id: 6, name: 'Product 6', image: '/assets/product6.png', price: 24.99 },
      { id: 7, name: 'Product 7', image: '/assets/product7.png', price: 29.99 },
    ],
    faq: [
      { question: 'How often should I use this kit?', answer: 'Use 2-3 times a week for best results.' },
      { question: 'Is this product suitable for all skin types?', answer: 'Yes, but perform a patch test before use.' },
    ],
    productImages: [
      Glow,
      '/assets/lemon.png',
      '/assets/turmeric.png',
    ],
  },
  3: {
    id: 3,
    name: 'Nourishment Kit',
    shortDescription: 'Deeply nourishes and revitalizes your skin.',
    originalPrice: 69.99,
    currentPrice: 59.99,
    discountPercentage: 14,
    keyBenefits: ['Nourishment', 'Revitalization', 'Hydration'],
    averageRating: 3.5,
    reviewCount: 42,
    ingredients: [
      { name: 'Shea Butter', description: 'Rich in fatty acids and antioxidants', image: '/assets/shea-butter.png' },
      { name: 'Argan Oil', description: 'Moisturizes and protects the skin', image: '/assets/argan-oil.png' },
    ],
    usageInstructions: [
      'Apply generously to clean skin',
      'Massage until fully absorbed',
      'Use nightly for best results',
    ],
    reviews: [
      { author: 'User 5', comment: 'My skin feels so soft!', rating: 5, verifiedPurchase: true, profileImage: 'https://i.pravatar.cc/150?img=5' },
      { author: 'User 6', comment: 'A bit too oily for my skin', rating: 2, verifiedPurchase: false, profileImage: 'https://i.pravatar.cc/150?img=6' },
    ],
    similarProducts: [
      { id: 8, name: 'Product 8', image: '/assets/product8.png', price: 34.99 },
      { id: 9, name: 'Product 9', image: '/assets/product9.png', price: 39.99 },
    ],
    faq: [
      { question: 'Can I use this product during the day?', answer: 'Yes, but apply sunscreen afterwards.' },
      { question: 'Is this product vegan?', answer: 'Yes, it is vegan and cruelty-free.' },
    ],
    productImages: [
      Nourishment,
      '/assets/shea-butter.png',
      '/assets/argan-oil.png',
    ],
  },
};

// const products = {
//   1: {

//     reviews: [
//       { author: 'User 1', comment: 'Great product!', rating: 5, verifiedPurchase: true, profileImage: 'https://i.pravatar.cc/150?img=1' },
//       { author: 'User 2', comment: 'I love it!', rating: 4, verifiedPurchase: false, profileImage: 'https://i.pravatar.cc/150?img=2' },
//     ],

//   },
//   2: {
//     id: 2,
//     name: 'De-Tan Kit',
//     shortDescription: 'Remove tan and brighten your skin with our effective de-tan kit.',
//     originalPrice: 59.99,
//     currentPrice: 49.99,
//     discountPercentage: 17,
//     keyBenefits: ['De-Tan', 'Brightening', 'Exfoliation'],
//     averageRating: 4.0,
//     reviewCount: 87,
//     ingredients: [
//       { name: 'Lemon Extract', description: 'Natural bleaching agent', image: '/assets/lemon.png' },
//       { name: 'Turmeric', description: 'Antiseptic and anti-inflammatory', image: '/assets/turmeric.png' },
//     ],
//     usageInstructions: [
//       'Apply a thick layer to tanned areas',
//       'Leave on for 15-20 minutes',
//       'Rinse off with cold water',
//     ],
//     reviews: [
//       { author: 'User 3', comment: 'Works wonders on my tan!', rating: 4, verifiedPurchase: true, profileImage: 'https://i.pravatar.cc/150?img=3' },
//       { author: 'User 4', comment: 'Good product, but takes time', rating: 3, verifiedPurchase: false, profileImage: 'https://i.pravatar.cc/150?img=4' },
//     ],
//     similarProducts: [
//       { id: 6, name: 'Product 6', image: '/assets/product6.png', price: 24.99 },
//       { id: 7, name: 'Product 7', image: '/assets/product7.png', price: 29.99 },
//     ],
//     faq: [

//   },
//   3: {
//     id: 3,
//     name: 'Nourishment Kit',
//     shortDescription: 'Deeply nourishes and revitalizes your skin.',
//     originalPrice: 69.99,
//     currentPrice: 59.99,
//     discountPercentage: 14,
//     keyBenefits: ['Nourishment', 'Revitalization', 'Hydration'],
//     averageRating: 3.5,
//     reviewCount: 42,
//     ingredients: [
//       { name: 'Shea Butter', description: 'Rich in fatty acids and antioxidants', image: '/assets/shea-butter.png' },
//       { name: 'Argan Oil', description: 'Moisturizes and protects the skin', image: '/assets/argan-oil.png' },
//     ],
//     usageInstructions: [
//       'Apply generously to clean skin',
//       'Massage until fully absorbed',
//       'Use nightly for best results',
//     ],
//     reviews: [
//       { author: 'User 5', comment: 'My skin feels so soft!', rating: 5, verifiedPurchase: true, profileImage: 'https://i.pravatar.cc/150?img=5' },
//       { author: 'User 6', comment: 'A bit too oily for my skin', rating: 2, verifiedPurchase: false, profileImage: 'https://i.pravatar.cc/150?img=6' },
//     ],
//     similarProducts: [
//       { id: 8, name: 'Product 8', image: '/assets/product8.png', price: 34.99 },
//       { id: 9, name: 'Product 9', image: '/assets/product9.png', price: 39.99 },
//     ],
//     faq: [
//       { question: 'Can I use this product during the day?', answer: 'Yes, but apply sunscreen afterwards.' },
//       { question: 'Is this product vegan?', answer: 'Yes, it is vegan and cruelty-free.' },
//     ],
//     productImages: [
//       'Nourishment',
//       '/assets/shea-butter.png',
//       '/assets/argan-oil.png',
//     ],
//   },
// };


export default products;
