import React from 'react';
import { BiLabel } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-500 text-white p-4 shadow-md">
    <nav className="flex justify-between items-center container mx-auto">
      <h1 className="text-2xl font-bold">Stray Animal Welfare</h1>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/adoption" className="hover:underline">Adoption</Link></li>
        <li><Link to="/feeding" className="hover:underline">Feeding</Link></li>
        <li><Link to="/complaints" className="hover:underline">Complaints</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
