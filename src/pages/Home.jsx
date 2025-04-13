import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceList from '../components/ServiceList';
import DiscountCarousel from '../components/DiscountCarousel';
import FeaturedArtists from '../components/FeaturedArtists';
import PromotionalOffers from '../components/PromotionalOffers';
import Testimonials from '../components/Testimonials';

const Home = () => {
   const services = [
   {
     name: 'Makeup Application', // More specific
     icon: '💄',
   },
   {
     name: 'Hair Styling', // More specific than 'Hair'
     icon: '💇‍♀️', // Represents styling/cutting
   },
   {
     name: 'Hair Cutting',
     icon: '✂️', // Specific icon for cutting
   },
   {
     name: 'Hair Coloring',
     icon: '🎨', // Represents coloring
   },
   {
     name: 'Manicure', // Specific nail service
     icon: '💅',
   },
   {
     name: 'Pedicure', // Added foot care
     icon: '👣',
   },
   {
     name: 'Facial',
     icon: '💆‍♀️', // Represents facial/spa treatment
   },
   {
     name: 'Massage', // Added common spa service
     icon: '🧖‍♀️', // Represents spa/relaxation, can also use 💆‍♂️
   },
   {
     name: 'Waxing', // Added hair removal
     icon: '✨', // Icon suggesting smoothness/cleanliness
   },
   {
     name: 'Threading', // Added specific hair removal (often face/brows)
     icon: '🧵',
   },
   {
     name: 'Brows & Lashes', // Added eye area treatments (shaping, tinting, extensions, lifts)
     icon: '👀',
   },
   {
     name: 'Body Treatment', // Added scrubs, wraps etc.
     icon: '🧴', // Represents lotions/products used
   },
   {
     name: 'Tanning', // Added tanning services
     icon: '☀️',
   },
   // Add other specialized services as needed, e.g.:
   // { name: 'Microdermabrasion', icon: '💎' },
   // { name: 'Chemical Peel', icon: '🧪' },
 ];


// const services = [
//   {
//     name: 'Makeup Application',
//     // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Makeup',
//   },
//   {
//     name: 'Hair Styling',
//     // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Styling',
//   },
//   {
//     name: 'Hair Cutting',
//      // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Cutting',
//   },
//   {
//     name: 'Hair Coloring',
//     // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Coloring',
//   },
//   {
//     name: 'Manicure',
//     // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Mani',
//   },
//   {
//     name: 'Pedicure',
//     // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Pedi',
//   },
//   {
//     name: 'Facial',
//     // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Facial',
//   },
//   {
//     name: 'Massage',
//     // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Massage',
//   },
//   {
//     name: 'Waxing',
//     // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Waxing',
//   },
//   {
//     name: 'Threading',
//     // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Threading',
//   },
//   {
//     name: 'Brows & Lashes',
//     // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Brows',
//   },
//   {
//     name: 'Body Treatment',
//     // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Body',
//   },
//   {
//     name: 'Tanning',
//     // Replace with actual illustration URL
//     icon: 'https://placehold.co/40x40/EFEFEF/777?text=Tanning',
//   },
//   // Add other specialized services as needed, using image URLs
//   // {
//   //   name: 'Microdermabrasion',
//   //   icon: 'https://placehold.co/40x40/EFEFEF/777?text=Microderm',
//   // },
// ]; 
  return (
    <div>
      <HeroSection />
      <ServiceList services={services} />
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">#SpecialForYou</h2>
          <DiscountCarousel />
        </div>
      </section>
      <FeaturedArtists />
      <PromotionalOffers />
      <Testimonials />
    </div>
  );
};

export default Home;
