import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaMoneyBillWave, FaCookieBite, FaTags, FaChartLine } from 'react-icons/fa';

const Affiliate = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-t from-rose-gold via-rose-gold-light to-pearlescent-white p-6 md:p-12">
      <div className="container mx-auto py-10 text-center">
        <Fade triggerOnce>
          <h1 className="font-cinzel font-bold text-5xl text-rose-gold-dark mb-4">
            💸 Affiliate Program – Earn with OzilMakeup
          </h1>
        </Fade>
        <Fade triggerOnce delay={300}>
          <p className="font-montserrat text-xl text-gray-700 max-w-3xl mx-auto">
            Love our Products? Let’s Earn Together!
          </p>
        </Fade>
      </div>

      <div className="container mx-auto my-16">
        <Slide triggerOnce direction="up">
          <p className="font-poppins text-lg text-gray-600 text-center max-w-4xl mx-auto">
            At <strong>OzilMakeup</strong>, we believe in <strong>growing with our community</strong>. If you're a beauty lover, content creator, influencer, or skincare professional — our <strong>Affiliate Program</strong> is the perfect way to turn your passion into income.
          </p>
        </Slide>
      </div>

      <div className="container mx-auto text-center my-16">
        <Fade triggerOnce>
          <h2 className="font-montserrat font-bold text-3xl text-gray-800 mb-8">🎯 Why Join?</h2>
        </Fade>
        <div className="grid md:grid-cols-4 gap-8">
          <Fade triggerOnce delay={200}>
            <div className="bg-white/50 shadow-neumorphic rounded-lg p-6 backdrop-blur-sm">
              <FaMoneyBillWave className="text-5xl text-rose-gold mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-xl mb-2">Upto 15% Commission</h3>
              <p className="font-poppins text-gray-600">On every sale.</p>
            </div>
          </Fade>
          <Fade triggerOnce delay={400}>
            <div className="bg-white/50 shadow-neumorphic rounded-lg p-6 backdrop-blur-sm">
              <FaCookieBite className="text-5xl text-rose-gold mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-xl mb-2">30-Day Cookie Duration</h3>
              <p className="font-poppins text-gray-600">Get credit even if users buy later.</p>
            </div>
          </Fade>
          <Fade triggerOnce delay={600}>
            <div className="bg-white/50 shadow-neumorphic rounded-lg p-6 backdrop-blur-sm">
              <FaTags className="text-5xl text-rose-gold mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-xl mb-2">Exclusive Offers</h3>
              <p className="font-poppins text-gray-600">For your audience.</p>
            </div>
          </Fade>
          <Fade triggerOnce delay={800}>
            <div className="bg-white/50 shadow-neumorphic rounded-lg p-6 backdrop-blur-sm">
              <FaChartLine className="text-5xl text-rose-gold mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-xl mb-2">Real-Time Dashboard</h3>
              <p className="font-poppins text-gray-600">To track clicks, sales, and earnings.</p>
            </div>
          </Fade>
        </div>
      </div>

      <div className="container mx-auto text-center my-16">
        <Fade triggerOnce>
          <h2 className="font-montserrat font-bold text-3xl text-gray-800 mb-8">👇 How It Works</h2>
        </Fade>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <Fade triggerOnce delay={200}>
            <div className="p-6">
              <div className="bg-rose-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-montserrat font-bold text-xl">Sign Up</h3>
            </div>
          </Fade>
          <Fade triggerOnce delay={400}>
            <div className="p-6">
              <div className="bg-rose-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-montserrat font-bold text-xl">Get Your Link</h3>
            </div>
          </Fade>
          <Fade triggerOnce delay={600}>
            <div className="p-6">
              <div className="bg-rose-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-montserrat font-bold text-xl">Promote</h3>
            </div>
          </Fade>
          <Fade triggerOnce delay={800}>
            <div className="p-6">
              <div className="bg-rose-gold text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-montserrat font-bold text-xl">Earn</h3>
            </div>
          </Fade>
        </div>
      </div>

      <div className="container mx-auto text-center my-16">
        <Fade triggerOnce>
          <p className="font-poppins text-lg text-gray-700 mb-8">
            Whether you blog, vlog, or just post on Instagram, you can start earning today.
          </p>
          <a href="/" className="bg-secondary text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
            Apply Now & Become an OzilMakeup Affiliate Star!
          </a>
        </Fade>
      </div>
    </div>
  );
};

export default Affiliate;
