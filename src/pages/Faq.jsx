import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { FaPlus, FaMinus, FaLeaf, FaBox, FaCreditCard, FaConciergeBell } from 'react-icons/fa';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left font-montserrat font-bold text-lg text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? <FaMinus /> : <FaPlus />}</span>
      </button>
      {isOpen && <div className="mt-4 font-poppins text-gray-600">{children}</div>}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-t from-rose-gold via-rose-gold-light to-pearlescent-white p-4 sm:p-6 md:p-12">
      <div className="container mx-auto py-10 text-center">
        <Fade triggerOnce>
          <h1 className="font-cinzel font-bold text-4xl sm:text-5xl text-rose-gold-dark mb-4">
            ❓ Frequently Asked Questions (FAQs)
          </h1>
        </Fade>
      </div>

      <div className="container mx-auto max-w-4xl">
        <Fade triggerOnce>
          <div className="bg-white/50 shadow-neumorphic rounded-lg p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-gray-800 mb-6 flex items-center"><FaLeaf className="mr-4 text-rose-gold" />Product Related</h2>
            <Accordion title="Are your products suitable for sensitive skin?">
              <p>Yes! All OzilMakeup products are <strong>dermatologically tested</strong> and free from harsh chemicals, making them ideal for all skin types — including sensitive skin.</p>
            </Accordion>
            <Accordion title="Are your products cruelty-free?">
              <p>Absolutely. We are a <strong>100% cruelty-free</strong> brand and do not test on animals.</p>
            </Accordion>
            <Accordion title="Do OzilMakeup products contain parabens or sulfates?">
              <p>No. Our formulations are <strong>free from parabens, sulfates, and hydroquinone.</strong></p>
            </Accordion>
          </div>
        </Fade>

        <Fade triggerOnce delay={200}>
          <div className="bg-white/50 shadow-neumorphic rounded-lg p-6 sm:p-8 backdrop-blur-sm mt-8">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-gray-800 mb-6 flex items-center"><FaBox className="mr-4 text-rose-gold" />Order & Shipping</h2>
            <Accordion title="How long does shipping take?">
              <p>Orders are shipped within <strong>1–2 business days</strong> and typically delivered within <strong>3–7 days</strong>, depending on your location.</p>
            </Accordion>
            <Accordion title="How do I track my order?">
              <p>Once shipped, you'll receive a <strong>tracking link</strong> via SMS/email. You can also log into your account and view tracking under "My Orders".</p>
            </Accordion>
          </div>
        </Fade>

        <Fade triggerOnce delay={400}>
          <div className="bg-white/50 shadow-neumorphic rounded-lg p-6 sm:p-8 backdrop-blur-sm mt-8">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-gray-800 mb-6 flex items-center"><FaCreditCard className="mr-4 text-rose-gold" />Payments & Returns</h2>
            <Accordion title="What payment methods do you accept?">
              <p>We accept <strong>UPI, debit/credit cards, COD (Cash on Delivery), and net banking</strong>.</p>
            </Accordion>
            <Accordion title="Can I return a product?">
              <p>Yes. Products can be returned if unused and unopened within <strong>7 days</strong> of delivery. Please refer to our <strong>Returns Policy</strong>.</p>
            </Accordion>
          </div>
        </Fade>

        <Fade triggerOnce delay={600}>
          <div className="bg-white/50 shadow-neumorphic rounded-lg p-6 sm:p-8 backdrop-blur-sm mt-8">
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-gray-800 mb-6 flex items-center"><FaConciergeBell className="mr-4 text-rose-gold" />Services & More</h2>
            <Accordion title="Do you offer professional salon services?">
              <p>Yes! You can explore our <strong>OzilMakeup Service App</strong> to book verified makeup artists for weddings, events, and more.</p>
            </Accordion>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Faq;
