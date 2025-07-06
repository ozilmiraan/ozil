import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaShieldAlt, FaSmileBeam } from 'react-icons/fa';
const Assurance = () => {
  return (
    <section className="relative py-16 bg-gradient-to-t from-rose-gold-light to-pearlescent-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Slide triggerOnce direction="left">
            <div className="relative">
              <img src="https://via.placeholder.com/600x600" alt="Assurance" className="rounded-lg shadow-2xl w-full" />
            </div>
          </Slide>
          <Slide triggerOnce direction="right">
            <div>
              <h2 className="font-montserrat font-bold text-4xl text-rose-gold-dark mb-6">
                Your Assurance of Safety & Delight
              </h2>
              <div className="space-y-8">
                <Fade triggerOnce delay={200}>
                  <div className="flex items-start">
                    <div className="bg-rose-gold text-white rounded-full p-4 mr-6">
                      <FaShieldAlt className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-2xl text-gray-800 mb-2">Safety and Compliance</h3>
                      <p className="font-poppins text-gray-600">
                        Our business practices adhere to the legal and regulatory standards of the industry. We maintain ethical and responsible practices to promote mutual benefits for all stakeholders.
                      </p>
                    </div>
                  </div>
                </Fade>
                <Fade triggerOnce delay={400}>
                  <div className="flex items-start">
                    <div className="bg-rose-gold text-white rounded-full p-4 mr-6">
                      <FaSmileBeam className="text-3xl" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-2xl text-gray-800 mb-2">Customer Delight</h3>
                      <p className="font-poppins text-gray-600">
                        We go above and beyond to ensure our customers' satisfaction, providing hassle-free services and efficient product supply.
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Assurance;
