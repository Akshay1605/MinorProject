import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './paages/Home.js';
import Adoption from './paages/Adoption.js';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adoption" element={<Adoption />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
