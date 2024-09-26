import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900 text-gray-100">
      <header className="p-4 bg-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-500">
            CoinWhiz
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link to="/market" className="hover:text-blue-500 transition-colors">
              Markets
            </Link>
            <Link to="/watchlist" className="hover:text-blue-500 transition-colors">
              Watchlist
            </Link>
            <Link to="/about" className="hover:text-blue-500 transition-colors">
              About
            </Link>
          </nav>

          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block hover:text-blue-500 transition-colors">
              Home
            </Link>
            <Link to="/markets" className="block hover:text-blue-500 transition-colors">
              Markets
            </Link>
            <Link to="/trade" className="block hover:text-blue-500 transition-colors">
              Trade
            </Link>
            <Link to="/about" className="block hover:text-blue-500 transition-colors">
              About
            </Link>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Header;
