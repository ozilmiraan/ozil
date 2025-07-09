import Face from "../assets/face-serum.jpg";
import Glow from "../assets/instant-glow.jpg";
import Nourishment from "../assets/nourishment.jpg";

import FaceWashMain from '../assets/images/FaceWash/faceWash_main.jpg';
import FaceWashAd from '../assets/images/FaceWash/faceWash_ad.jpg';
import FaceWashInfo from '../assets/images/FaceWash/faceWash_info.jpg';
import FaceWashBenefits from '../assets/images/FaceWash/faceWash_benefits.jpg';
import FaceWashModel from '../assets/images/FaceWash/faceWash_model.jpg';

const products = {
  1: {
    id: 1,
    name: "Race Water Face Wash",
    category: "Skincare",
    shortDescription: "A gentle yet powerful face wash enriched with skin-loving ingredients.",
    originalPrice: 349,
    currentPrice: 299,
    discountPercentage: 15,
    keyBenefits: ["Instant Glow", "De-Tan", "Deep Nourishment"],
    averageRating: 4.5,
    reviewCount: 123,
    ingredients: [
      {
        name: "Aloe Vera",
        description: "Soothes and hydrates the skin",
        image: "/assets/aloe-vera.png",
      },
      {
        name: "Vitamin C",
        description: "Brightens and evens skin tone",
        image: "/assets/vitamin-c.png",
      },
    ],
    usageInstructions: [
      "Apply a small amount to face and neck",
      "Massage gently until absorbed",
      "Use daily for best results",
    ],
    reviews: [
      {
        author: "User 1",
        comment: "Great product!",
        rating: 5,
        verifiedPurchase: true,
        profileImage: "https://i.pravatar.cc/150?img=1",
      },
      {
        author: "User 2",
        comment: "I love it!",
        rating: 4,
        verifiedPurchase: false,
        profileImage: "https://i.pravatar.cc/150?img=2",
      },
    ],
    similarProducts: [
      { id: 4, name: "Product 4", image: "/assets/product4.png", price: 29.99 },
      { id: 5, name: "Product 5", image: "/assets/product5.png", price: 34.99 },
    ],
    faq: [
      {
        question: "Is this product suitable for sensitive skin?",
        answer: "Yes, it is formulated to be gentle on sensitive skin.",
      },
      {
        question: "What is the shelf life of this product?",
        answer: "The shelf life is 12 months after opening.",
      },
    ],
    productImages: [FaceWashMain,FaceWashAd, FaceWashInfo, FaceWashBenefits, FaceWashModel],
  },
  2: {
    id: 2,
    name: "De-Tan Kit",
    shortDescription:
      "Remove tan and brighten your skin with our effective de-tan kit.",
    originalPrice: 59.99,
    currentPrice: 49.99,
    discountPercentage: 17,
    keyBenefits: ["De-Tan", "Brightening", "Exfoliation"],
    averageRating: 4.0,
    reviewCount: 87,
    ingredients: [
      {
        name: "Lemon Extract",
        description: "Natural bleaching agent",
        image: "/assets/lemon.png",
      },
      {
        name: "Turmeric",
        description: "Antiseptic and anti-inflammatory",
        image: "/assets/turmeric.png",
      },
    ],
    usageInstructions: [
      "Apply a thick layer to tanned areas",
      "Leave on for 15-20 minutes",
      "Rinse off with cold water",
    ],
    reviews: [
      {
        author: "User 3",
        comment: "Works wonders on my tan!",
        rating: 4,
        verifiedPurchase: true,
        profileImage: "https://i.pravatar.cc/150?img=3",
      },
      {
        author: "User 4",
        comment: "Good product, but takes time",
        rating: 3,
        verifiedPurchase: false,
        profileImage: "https://i.pravatar.cc/150?img=4",
      },
    ],
    similarProducts: [
      { id: 6, name: "Product 6", image: "/assets/product6.png", price: 24.99 },
      { id: 7, name: "Product 7", image: "/assets/product7.png", price: 29.99 },
    ],
    faq: [
      {
        question: "How often should I use this kit?",
        answer: "Use 2-3 times a week for best results.",
      },
      {
        question: "Is this product suitable for all skin types?",
        answer: "Yes, but perform a patch test before use.",
      },
    ],
    productImages: [Glow, "/assets/lemon.png", "/assets/turmeric.png"],
  },
  3: {
    id: 3,
    name: "Nourishment Kit",
    shortDescription: "Deeply nourishes and revitalizes your skin.",
    originalPrice: 69.99,
    currentPrice: 59.99,
    discountPercentage: 14,
    keyBenefits: ["Nourishment", "Revitalization", "Hydration"],
    averageRating: 3.5,
    reviewCount: 42,
    ingredients: [
      {
        name: "Shea Butter",
        description: "Rich in fatty acids and antioxidants",
        image: "/assets/shea-butter.png",
      },
      {
        name: "Argan Oil",
        description: "Moisturizes and protects the skin",
        image: "/assets/argan-oil.png",
      },
    ],
    usageInstructions: [
      "Apply generously to clean skin",
      "Massage until fully absorbed",
      "Use nightly for best results",
    ],
    reviews: [
      {
        author: "User 5",
        comment: "My skin feels so soft!",
        rating: 5,
        verifiedPurchase: true,
        profileImage: "https://i.pravatar.cc/150?img=5",
      },
      {
        author: "User 6",
        comment: "A bit too oily for my skin",
        rating: 2,
        verifiedPurchase: false,
        profileImage: "https://i.pravatar.cc/150?img=6",
      },
    ],
    similarProducts: [
      { id: 8, name: "Product 8", image: "/assets/product8.png", price: 34.99 },
      { id: 9, name: "Product 9", image: "/assets/product9.png", price: 39.99 },
    ],
    faq: [
      {
        question: "Can I use this product during the day?",
        answer: "Yes, but apply sunscreen afterwards.",
      },
      {
        question: "Is this product vegan?",
        answer: "Yes, it is vegan and cruelty-free.",
      },
    ],
    productImages: [
      Nourishment,
      "/assets/shea-butter.png",
      "/assets/argan-oil.png",
    ],
  },
};

// const categories = [
//   {
//     id: 1,
//     key: "skincare",
//     name: "Skincare",
//     description: "Products to enhance and maintain skin health.",
//     image: "/assets/skincare-category.jpg",
//     subcategories: [
//       { id: 1, name: "Cleanser" },
//       { id: 2, name: "Moisturizer" },
//       { id: 3, name: "Face Serums" },
//       { id: 4, name: "Face Masks" },
//       { id: 5, name: "Exfoliators" },
//       { id: 6, name: "Sunscreen" },
//       { id: 7, name: "Eye Care" },
//       { id: 8, name: "Lip Care" },
//       { id: 9, name: "Toners & Mists" },
//       { id: 10, name: "Facial Kits" },
//     ],
//   },
//   {
//     id: 2,
//     key: "makeup",
//     name: "Makeup",
//     description: "Cosmetics to enhance your beauty.",
//     image: "/assets/makeup-category.jpg",
//   },
//   {
//     id: 3,
//     key: "haircare",
//     name: "Haircare",
//     description: "Products for healthy and beautiful hair.",
//     image: "/assets/haircare-category.jpg",
//   },
//   {
//     id: 4,
//     key: "bodycare",
//     name: "Bodycare",
//     description: "Products to nourish and care for your body.",
//     image: "/assets/bodycare-category.jpg",
//   },
//   {
//     id: 5,
//     key: "fragrance",
//     name: "Fragrance",
//     description: "Perfumes and body sprays for a lasting scent.",
//     image: "/assets/fragrance-category.jpg",
//   },
//   {
//     id: 6,
//     key: "tools",
//     name: "Tools & Accessories",
//     description: "Essential tools for your beauty routine.",
//     image: "/assets/tools-category.jpg",
//   },
//   {
//     id: 7,
//     key: "vitamins",
//     name: "Vitamins & Supplements",
//     description: "Nutritional supplements for overall health.",
//     image: "/assets/vitamins-category.jpg",
//   },
//   {
//     id: 8,
//     key: "organic",
//     name: "Organic & Natural",
//     description: "Eco-friendly and natural products for your skin.",
//     image: "/assets/organic-category.jpg",
//   },
//   {
//     id: 9,
//     key: "luxury",
//     name: "Luxury",
//     description: "Premium and high-end beauty products.",
//     image: "/assets/luxury-category.jpg",
//   },
//   {
//     id: 10,
//     key: "wellness",
//     name: "Wellness",
//     description: "Products for overall well-being and relaxation.",
//     image: "/assets/wellness-category.jpg",
//   },
//   {
//     id: 11,
//     key: "nails",
//     name: "Nails",
//     description: "Nail care and polish for beautiful nails.",
//     image: "/assets/nails-category.jpg",
//   },
//   {
//     id: 12,
//     key: "sunProtection",
//     name: "Sun Protection",
//     description: "Sunscreens and after-sun care products.",
//     image: "/assets/sun-protection-category.jpg",
//   },
//   {
//     id: 13,
//     key: "oralCare",
//     name: "Oral Care",
//     description: "Toothpastes, mouthwashes, and dental tools.",
//     image: "/assets/oral-care-category.jpg",
//   },
// ];

// const productsByAdmin = [
//   {
//     id: 1,
//     name: "Facial Kit",
//     slug: "facial-kit",
//     category: 1,
//     short_description: "A complete facial kit for glowing skin.",
//     original_price: "49.99",
//     current_price: "39.99",
//     discount_percentage: 20,
//     key_benefits: ["Instant Glow", "De-Tan", "Deep Nourishment"],
//     ingredients: [
//       {
//         name: "Aloe Vera",
//         description: "Soothes and hydrates the skin",
//         image: "/assets/aloe-vera.png",
//       },
//       {
//         name: "Vitamin C",
//         description: "Brightens and evens skin tone",
//         image: "/assets/vitamin-c.png",
//       },
//     ],
//     usage_instructions: [
//       "Apply a small amount to face and neck",
//       "Massage gently until absorbed",
//       "Use daily for best results",
//     ],
//         reviews: [
//       {
//         author: "User 5",
//         comment: "My skin feels so soft!",
//         rating: 5,
//         verifiedPurchase: true,
//         profileImage: "https://i.pravatar.cc/150?img=5",
//       },
//       {
//         author: "User 6",
//         comment: "A bit too oily for my skin",
//         rating: 2,
//         verifiedPurchase: false,
//         profileImage: "https://i.pravatar.cc/150?img=6",
//       },
//     ],
//     faq: [
//       {
//         question: "Is this suitable for sensitive skin?",
//         answer: "Yes, it is gentle and safe.",
//       },
//     ],
//     product_images: [
//       "/assets/product_main.jpg",
//       "/assets/product_info.jpg",
//       "/assets/product_use.jpg",
//       "/assets/product_modal.jpg",
//       "/assets/product_offers.jpg",
//     ],
//     average_rating: 4.5,
//     review_count: 123,
//     stock_count: 42,
//     is_featured: true,
//     is_active: true,
//     created_at: "2025-06-28T12:34:56Z",
//     updated_at: "2025-06-28T13:00:01Z",
//   },
// ];

export default products;
