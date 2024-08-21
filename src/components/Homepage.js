

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CenterContent from './CenterContent'; 

const Homepage = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <header className="relative flex items-center justify-between py-3 bg-black border-b border-gray-700 px-4 md:px-10">
        <img 
          src="/logo.png" 
          alt="Hareesh Naik Logo" 
          className="h-10" 
        />
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav className={`absolute md:relative md:flex md:space-x-4 ${isMobileMenuOpen ? 'block' : 'hidden'} md:pr-10 top-full left-0 w-full md:w-auto bg-black md:bg-transparent`}>
          <Link to="/about" className="block md:inline text-white hover:text-blue-500 py-2">About</Link>
          <Link to="/projects" className="block md:inline text-white hover:text-blue-500 py-2">Projects</Link>
          <Link to="/experience" className="block md:inline text-white hover:text-blue-500 py-2">Experience</Link>
          <Link to="/contacts" className="block md:inline text-white hover:text-blue-500 py-2">Contact</Link>
        </nav>
      </header>

      <CenterContent />

      <footer className="flex border-t border-gray-700">
      </footer>
    </div>
  );
};

export default Homepage;
