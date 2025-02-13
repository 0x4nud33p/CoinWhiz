import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <motion.h1
          className="text-4xl font-bold text-blue-500 mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          About CoinWhiz
        </motion.h1>

        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          CoinWhiz is a cutting-edge cryptocurrency tracking platform designed to provide real-time data, insights, 
          and trends for the fast-evolving world of digital currencies. Whether you're a seasoned trader or just 
          starting out, CoinWhiz equips you with the tools and information you need to make informed decisions in 
          the volatile world of crypto.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-gray-300 mt-6 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Our Mission
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          At CoinWhiz, our mission is to democratize access to cryptocurrency data, enabling users to track prices, 
          monitor market trends, and stay updated with the latest news. We strive to make the crypto market accessible 
          to everyone through a user-friendly platform that offers reliable, up-to-date information.
        </motion.p>

        <motion.h2
          className="text-2xl font-semibold text-gray-300 mt-6 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Features
        </motion.h2>

        <motion.ul
          className="list-disc list-inside text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Real-time cryptocurrency price tracking
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            Market cap and volume analysis
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            Advanced charting and technical indicators
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            Comprehensive news and updates from the crypto world
          </motion.li>
        </motion.ul>

        <motion.h2
          className="text-2xl font-semibold text-gray-300 mt-6 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Why CoinWhiz?
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          Our platform is built for speed, accuracy, and ease of use. Whether you are tracking Bitcoin, Ethereum, or 
          any altcoin, CoinWhiz provides seamless access to the latest data and analytics, helping you stay ahead in the 
          dynamic world of cryptocurrencies.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          Join the millions of users who trust CoinWhiz for all their cryptocurrency tracking needs.
        </motion.p>
      </div>
    </div>
  );
}

export default About;
