import React from 'react';
import animalImage from '../assets/animal1.jpg'; 

const Adoption = () => (
  <div className="container mx-auto p-6">
    <h2 className="text-3xl font-bold mb-4">Adopt a Friend</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded overflow-hidden">
        <img src={animalImage} alt="Animal" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold">Buddy</h3>
          <p>Age: 2 years</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Adopt
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Adoption;
