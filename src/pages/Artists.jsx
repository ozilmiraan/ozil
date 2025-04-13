import React from 'react';
import { Link } from 'react-router-dom';

const Artists = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Makeup Artists</h1>
      <div className="mb-4 flex justify-center">
        <input type="text" placeholder="Search by city or service" className="border p-2 rounded mr-2" />
        <button className="bg-neutral text-white py-2 px-4 rounded hover:bg-neutral-dark">Search</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow rounded p-4">
          <img src="https://placekitten.com/200/200" alt="Artist 1" className="rounded-full w-32 h-32 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Artist 1</h3>
          <p className="text-center">Specializes in bridal makeup.</p>
          <div className="flex justify-center mt-2">
            <span>Rating: 4.5</span>
          </div>
          <div className="flex justify-center mt-4">
            <Link to="/artist/1" className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">View Profile</Link>
          </div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <img src="https://placekitten.com/201/201" alt="Artist 2" className="rounded-full w-32 h-32 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Artist 2</h3>
          <p className="text-center">Expert in party makeup.</p>
           <div className="flex justify-center mt-2">
            <span>Rating: 4.8</span>
          </div>
          <div className="flex justify-center mt-4">
             <Link to="/artist/2" className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">View Profile</Link>
          </div>
        </div>
         <div className="bg-white shadow rounded p-4">
          <img src="https://placekitten.com/202/202" alt="Artist 3" className="rounded-full w-32 h-32 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Artist 3</h3>
          <p className="text-center">Professional for photoshoots.</p>
           <div className="flex justify-center mt-2">
            <span>Rating: 4.2</span>
          </div>
          <div className="flex justify-center mt-4">
            <Link to="/artist/3" className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark">View Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
