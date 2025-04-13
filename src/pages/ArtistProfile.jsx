import React from 'react';
import { useParams } from 'react-router-dom';

const ArtistProfile = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Artist Profile</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://placekitten.com/200/200" alt="Portfolio 1" className="rounded" />
            <img src="https://placekitten.com/201/201" alt="Portfolio 2" className="rounded" />
            <img src="https://placekitten.com/202/202" alt="Portfolio 3" className="rounded" />
            <img src="https://placekitten.com/203/203" alt="Portfolio 4" className="rounded" />
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-4">Service Descriptions</h2>
            <p><b>Bridal Makeup:</b> Includes consultation, full makeup application, and touch-ups. This service is designed to make you look your absolute best on your special day.</p>
            <p><b>Party Makeup:</b> Includes a standard makeup application for parties and events. Perfect for any occasion where you want to look your best.</p>
            <p><b>Photoshoot Makeup:</b> Includes makeup application tailored for photoshoots. This service ensures you look flawless in every shot.</p>
             <p><b>Special Effects Makeup:</b> Includes advanced makeup techniques for special effects, costumes, and theatrical performances.</p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold mb-4">Dynamic Pricing</h2>
            <table className="table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Service</th>
                  <th className="px-4 py-2">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Bridal Makeup</td>
                  <td className="border px-4 py-2">$500</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Party Makeup</td>
                  <td className="border px-4 py-2">$300</td>
                </tr>
                 <tr>
                  <td className="border px-4 py-2">Photoshoot Makeup</td>
                  <td className="border px-4 py-2">$400</td>
                </tr>
                 <tr>
                  <td className="border px-4 py-2">Special Effects Makeup</td>
                  <td className="border px-4 py-2">$600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h2 className="text-2xl font-semibold mb-4">Reviews and Ratings</h2>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 mr-1">★★★★★</span>
              <span>5.0</span>
            </div>
            <p className="italic mb-2">"Amazing makeup artist!"</p>
            <p className="font-semibold">- Client 1</p>
          </div>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500 mr-1">★★★★☆</span>
              <span>4.5</span>
            </div>
            <p className="italic mb-2">"Highly professional and talented."</p>
            <p className="font-semibold">- Client 2</p>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Availability</h2>
          <div className="bg-gray-100 p-4 rounded">
            <p>Calendar widget will be here.</p>
            {/* Calendar widget will be implemented here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;
