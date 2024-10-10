import React from "react";
import MyCarousel from "./MyCarousel";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";

export default function Home() {
  const token = localStorage.getItem('token');

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col justify-between">
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-blue-500">CoinWhiz</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            "Stay Ahead of the Market with CoinWhiz"
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
            Live Crypto Prices
          </h2>
          <MyCarousel />
        </section>
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Ready to dive into crypto?
          </h2>
          <p className="text-gray-400 mb-8">
            Join CoinWhiz today and start your cryptocurrency journey!
          </p>
          {!token && (
            <Link to="/signup">
              <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded text-white">
                Sign Up Now
              </button>
            </Link>
          )}
        </section>
      </main>
    </div>
  );
}
