import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X,User  } from 'lucide-react'; 
import { motion } from 'framer-motion';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const activeLinkClass = "relative text-black hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-blue-500 before:origin-center before:h-[3px] before:w-0 hover:before:w-[50%] before:bottom-[-4px] before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-blue-500 after:origin-center after:h-[3px] after:w-0 hover:after:w-[50%] after:bottom-[-4px] after:right-[50%] text-blue-500";

  return (
    <div className="bg-gray-900 text-gray-100">
      <header className="p-4 bg-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold text-blue-500">
            CoinWhiz
          </NavLink>


          <nav className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLinkClass : 'hover:text-blue-500 transition-colors'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/market"
              className={({ isActive }) =>
                isActive ? activeLinkClass : 'hover:text-blue-500 transition-colors'
              }
            >
              Markets
            </NavLink>
            <NavLink
              to="/watchlist"
              className={({ isActive }) =>
                isActive ? activeLinkClass : 'hover:text-blue-500 transition-colors'
              }
            >
              Watchlist
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeLinkClass : 'hover:text-blue-500 transition-colors'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? activeLinkClass : 'hover:text-blue-500 transition-colors'
              }
            >
           
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              
                <span className="font-bold">
                  <User className="w-5 h-5 text-white" />
                </span>
              </div>
            </NavLink>
          </nav>

       
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>


        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 space-y-2"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeLinkClass : 'block hover:text-blue-500 transition-colors'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/market"
              className={({ isActive }) =>
                isActive ? activeLinkClass : 'block hover:text-blue-500 transition-colors'
              }
            >
              Markets
            </NavLink>
            <NavLink
              to="/watchlist"
              className={({ isActive }) =>
                isActive ? activeLinkClass : 'block hover:text-blue-500 transition-colors'
              }
            >
              Watchlist
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeLinkClass : 'block hover:text-blue-500 transition-colors'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? activeLinkClass : 'block hover:text-blue-500 transition-colors'
              }
            >
        
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <span className="font-bold">
                  <User className="w-5 h-5 text-white" />
                </span>
              </div>
            </NavLink>
          </motion.nav>
        )}
      </header>
    </div>
  );
}

export default Header;
