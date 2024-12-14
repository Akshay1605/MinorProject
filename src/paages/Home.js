import React from 'react';
import heroImage from '../assets/hero.jpg'; // Add a hero image in assets folder

const Home = () => (
  <div>
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1 className="text-5xl font-bold text-shadow-lg">Welcome to Stray Animal Welfare</h1>
    </div>
  </div>
);

export default Home;
