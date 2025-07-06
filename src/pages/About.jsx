import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaLeaf, FaFlask, FaGlobe, FaUserMd } from 'react-icons/fa';

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-t from-rose-gold via-rose-gold-light to-pearlescent-white p-4 sm:p-6 md:p-12">
      <div className="container mx-auto py-10 text-center">
        <Fade triggerOnce>
          <h1 className="font-cinzel font-bold text-4xl sm:text-5xl text-rose-gold-dark mb-4">
            🪞 About Us – OzilMakeup
          </h1>
        </Fade>
        <Fade triggerOnce delay={300}>
          <p className="font-montserrat text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Welcome to <strong>OzilMakeup</strong>, where we believe <strong>true beauty begins with healthy skin</strong> and confidence.
          </p>
        </Fade>
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center my-12 sm:my-16">
        <Slide triggerOnce direction="left">
          <div>
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-gray-800 mb-4">💫 From Dull to Dazzling — Instantly with Ozil</h2>
            <p className="font-poppins text-gray-600 mb-4 text-sm sm:text-base">
              Founded with a passion for authentic skincare and modern makeup rituals, OzilMakeup was born to deliver <strong>high-quality, science-backed beauty products</strong> for every skin type, tone, and texture.
            </p>
            <p className="font-poppins text-gray-600 text-sm sm:text-base">
              Whether you're preparing for a wedding, a boardroom pitch, or just a better version of yourself — <strong>OzilMakeup is your trusted companion</strong>.
            </p>
          </div>
        </Slide>
        <Slide triggerOnce direction="right">
          <div className="flex justify-center">
            {/* You can add an image here if you have one */}
            <div className="w-60 h-60 sm:w-80 sm:h-80 bg-rose-gold-light rounded-full shadow-neumorphic flex items-center justify-center">
              <span className="font-cinzel text-white text-3xl sm:text-4xl">OZIL</span>
            </div>
          </div>
        </Slide>
      </div>

      <div className="container mx-auto text-center my-12 sm:my-16">
        <Fade triggerOnce>
          <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-gray-800 mb-8">💖 What Sets Us Apart?</h2>
        </Fade>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          <Fade triggerOnce delay={200}>
            <div className="bg-white/50 shadow-neumorphic rounded-lg p-6 backdrop-blur-sm">
              <FaLeaf className="text-5xl text-rose-gold mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-xl mb-2">Clean Formulations</h3>
              <p className="font-poppins text-gray-600">Free from harmful chemicals like parabens, sulfates, and hydroquinone.</p>
            </div>
          </Fade>
          <Fade triggerOnce delay={400}>
            <div className="bg-white/50 shadow-neumorphic rounded-lg p-6 backdrop-blur-sm">
              <FaUserMd className="text-5xl text-rose-gold mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-xl mb-2">Dermatologist-Tested</h3>
              <p className="font-poppins text-gray-600">Safe, effective, and suitable for all skin types.</p>
            </div>
          </Fade>
          <Fade triggerOnce delay={600}>
            <div className="bg-white/50 shadow-neumorphic rounded-lg p-6 backdrop-blur-sm">
              <FaGlobe className="text-5xl text-rose-gold mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-xl mb-2">Proudly Made in India</h3>
              <p className="font-poppins text-gray-600">Locally crafted with global standards.</p>
            </div>
          </Fade>
          <Fade triggerOnce delay={800}>
            <div className="bg-white/50 shadow-neumorphic rounded-lg p-6 backdrop-blur-sm">
              <FaFlask className="text-5xl text-rose-gold mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-xl mb-2">Professional & Daily Use</h3>
              <p className="font-poppins text-gray-600">Designed for makeup artists and everyday glam.</p>
            </div>
          </Fade>
        </div>
      </div>

      <div className="container mx-auto text-center my-12 sm:my-16 max-w-3xl">
        <Fade triggerOnce>
          <p className="font-poppins text-base sm:text-lg text-gray-700">
            From our best-selling <strong>Rice Water Face Wash</strong> to <strong>de-tan kits</strong> and <strong>vitamin-enriched serums</strong>, our growing product line is rooted in <strong>efficacy, transparency, and love</strong>.
          </p>
          <p className="font-poppins text-base sm:text-lg text-gray-700 mt-4">
            Join thousands of glowing customers who have embraced OzilMakeup — because your skin deserves more than just makeup. It deserves <strong>care</strong>.
          </p>
        </Fade>
      </div>
    </div>
  );
};

export default About;
