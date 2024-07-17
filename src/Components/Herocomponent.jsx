import React from 'react';
import MyCarousel from './MyCarousel';

function Herocomponent() {
  return (
    <>
      <div
        className="bg-white hidden sm:block font-mono"
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            CoinWhiz
          </h1>
          <p className="mt-2 text-lg leading-8">
            "Stay Ahead of the Market with CoinWhiz"
          </p>
        </div>
      </div>
      <div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white"
      >
        <MyCarousel />
      </div>
    </>
  );
}

export default Herocomponent;
