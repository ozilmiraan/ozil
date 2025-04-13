import React from 'react';

const FeaturedArtists = () => {
  return (
    <section className="featured-artists py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded p-4">
            <img src="https://placekitten.com/200/200" alt="Artist 1" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Artist 1</h3>
            <p className="text-center">Specializes in bridal makeup.</p>
            <div className="flex justify-center mt-2">
              <span>Rating: 4.5</span>
            </div>
          </div>
          <div className="bg-white shadow rounded p-4">
            <img src="https://placekitten.com/201/201" alt="Artist 2" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Artist 2</h3>
            <p className="text-center">Expert in party makeup.</p>
            <div className="flex justify-center mt-2">
              <span>Rating: 4.8</span>
            </div>
          </div>
          <div className="bg-white shadow rounded p-4">
            <img src="https://placekitten.com/202/202" alt="Artist 3" className="rounded-full w-32 h-32 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-center">Artist 3</h3>
            <p className="text-center">Professional for photoshoots.</p>
            <div className="flex justify-center mt-2">
              <span>Rating: 4.2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;
