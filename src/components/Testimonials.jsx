import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded p-4">
            <p className="italic mb-2">"Great experience with Ozilmakeup!"</p>
            <p className="font-semibold">- Client 1</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <p className="italic mb-2">"Highly recommend their services."</p>
            <p className="font-semibold">- Client 2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
