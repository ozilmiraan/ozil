import React from 'react';
import { Fade } from 'react-awesome-reveal';

const blogPosts = [
  {
    title: "5 Reasons Why Rice Water is the New Super-Ingredient in Skincare",
    content: "Rice water has taken the skincare world by storm — and for good reason! Packed with amino acids, vitamins, and antioxidants, this natural toner hydrates, brightens, and tones your skin. Read how our Rice Water Face Wash taps into this ancient beauty secret.",
    image: "https://via.placeholder.com/400x250"
  },
  {
    title: "How to Build a Minimalist Skincare Routine (Under 5 Minutes!)",
    content: "Overwhelmed with 10-step routines? We get it. Learn how to create a powerful yet simple skincare regime using just 3 products — including our bestselling Vitamin C Serum.",
    image: "https://via.placeholder.com/400x250"
  },
  {
    title: "Say Goodbye to Sun Tan – Naturally!",
    content: "Struggling with sun tan, especially during Indian summers? Discover how our De-Tan Kit, enriched with gentle actives and antioxidants, helps remove tan and rejuvenate skin without harsh chemicals.",
    image: "https://via.placeholder.com/400x250"
  },
  {
    title: "Bridal Skincare Checklist – 30 Days to Glow Up",
    content: "Planning a wedding or pre-event glam? Here’s your timeline, featuring our Facial Kit, Serums, and professional artist service app to help you look picture-perfect.",
    image: "https://via.placeholder.com/400x250"
  }
];

const Blogs = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-t from-rose-gold via-rose-gold-light to-pearlescent-white p-4 sm:p-6 md:p-12">
      <div className="container mx-auto py-10 text-center">
        <Fade triggerOnce>
          <h1 className="font-cinzel font-bold text-4xl sm:text-5xl text-rose-gold-dark mb-4">
            📝 Blogs – Glowing Insights by OzilMakeup
          </h1>
        </Fade>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <Fade triggerOnce delay={index * 200} key={index}>
            <div className="bg-white/50 shadow-neumorphic rounded-lg overflow-hidden backdrop-blur-sm">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4 sm:p-6">
                <h2 className="font-montserrat font-bold text-xl sm:text-2xl mb-2">{post.title}</h2>
                <p className="font-poppins text-gray-600 mb-4 text-sm sm:text-base">{post.content}</p>
                <a href="/" className="text-rose-gold font-bold hover:underline text-sm sm:text-base">Read More →</a>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
