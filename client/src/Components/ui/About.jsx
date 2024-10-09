import React from 'react';

function About() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-blue-500 mb-4">About CoinWhiz</h1>
        <p className="text-lg leading-relaxed">
          CoinWhiz is a cutting-edge cryptocurrency tracking platform designed to provide real-time data, insights, 
          and trends for the fast-evolving world of digital currencies. Whether you're a seasoned trader or just 
          starting out, CoinWhiz equips you with the tools and information you need to make informed decisions in 
          the volatile world of crypto.
        </p>

        <h2 className="text-2xl font-semibold text-gray-300 mt-6 mb-2">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          At CoinWhiz, our mission is to democratize access to cryptocurrency data, enabling users to track prices, 
          monitor market trends, and stay updated with the latest news. We strive to make the crypto market accessible 
          to everyone through a user-friendly platform that offers reliable, up-to-date information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-300 mt-6 mb-2">Features</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Real-time cryptocurrency price tracking</li>
          <li>Market cap and volume analysis</li>
          <li>Advanced charting and technical indicators</li>
          <li>Comprehensive news and updates from the crypto world</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-300 mt-6 mb-2">Why CoinWhiz?</h2>
        <p className="text-lg leading-relaxed">
          Our platform is built for speed, accuracy, and ease of use. Whether you are tracking Bitcoin, Ethereum, or 
          any altcoin, CoinWhiz provides seamless access to the latest data and analytics, helping you stay ahead in the 
          dynamic world of cryptocurrencies.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          Join the millions of users who trust CoinWhiz for all their cryptocurrency tracking needs.
        </p>
      </div>
    </div>
  );
}

export default About;
