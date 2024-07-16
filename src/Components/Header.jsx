import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Signup, Signin, Watchlist } from '../Exports';

const menuItems = [
  { name: 'Market' },
  { name: 'Trending' },
  { name: 'Watchlist' },
  { name: 'Dashboard' },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isUserLoggedIn = () => true; 
  return (
    <>
      <div className="relative w-full p-2 bg-white lg:p-6 font-mono text-black">
        <div className="flex items-center justify-between px-4 py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              {/* logo goes here */}
            </span>
            <Link to={'/Home'}>
              <span className="font-bold text-xl text-black">CoinWhiz</span>
            </Link>
          </div>
          <div className="items-start hidden grow lg:flex">
            <ul className="inline-flex ml-12 space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link to={`/${item.name}`} className="inline-flex items-center text-sm font-semibold text-black hover:text-gray-600">
                    <span className="ml-3 text-base font-medium text-black">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden space-x-2 lg:block">
            {isUserLoggedIn() ? (
              <Link to={'/Signup'}>
                <button type="button" className="px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Sign Up</button>
              </Link>
            ) : (
              <Link to={'/Signin'}>
                <button type="button" className="px-3 py-2 text-sm font-semibold text-black bg-transparent rounded-md hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Sign In</button>
              </Link>
            )}
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="w-6 h-6 cursor-pointer text-black" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform lg:hidden">
              <div className="bg-white divide-y-2 rounded-lg shadow-lg divide-black ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span>
                        {/* logo goes here */}
                      </span>
                      <span className="font-bold text-xl text-black">CryptoWhiz</span>
                    </div>
                    <div className="-mr-2">
                      <button type="button" onClick={toggleMenu} className="inline-flex items-center justify-center p-2 text-black rounded-md hover:bg-black hover:text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        <span className="sr-only">Close menu</span>
                        <X className="w-6 h-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <Link key={item.name} to={`/${item.name}`} className="flex items-center p-3 -m-3 text-sm font-semibold rounded-md hover:bg-black/10">
                          <span className="ml-3 text-base font-medium text-black">{item.name}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="mt-4 space-y-2">
                    <Link to={'/Signin'}>
                      <button type="button" className="w-full px-3 py-2 text-sm font-semibold text-black border border-black rounded-md shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Sign In</button>
                    </Link>
                    <Link to={'/Signup'}>
                      <button type="button" className="w-full px-3 py-2 text-sm font-semibold text-black bg-black rounded-md shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Sign Up</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: '#68007a',
              color: 'white',
            },
          },
          error: {
            style: {
              background: 'red',
            },
          },
        }}
      />
    </>
  );
}

export default Header;
