"use client";

import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CryptoContext } from "../Api/CryptoContext";
import { FaSpinner } from "react-icons/fa";

const MyCarousel = () => {
  const { crypto } = useContext(CryptoContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextCrypto();
    }, 3000);
    return () => clearInterval(timer);
  }, [crypto]);

  const handleNextCrypto = () => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % crypto.length);
      setIsChanging(false);
    }, 500);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  if (!crypto || crypto.length === 0) {
    return (
      <div className="flex justify-center py-6">
        <FaSpinner className="animate-spin text-3xl text-blue-500" />
      </div>
    );
  }

  return (
    <div className="flex justify-center py-6">
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <motion.img
            className="w-12 h-12"
            src={crypto[currentIndex]?.image} 
            alt={crypto[currentIndex]?.name}
            initial="hidden"
            animate={isChanging ? "exit" : "visible"}
            exit="exit"
            variants={animationVariants}
            transition={{ duration: 0.5 }}
          />
          <div className="text-right">
            <motion.h3
              className="text-lg font-semibold text-white"
              initial="hidden"
              animate={isChanging ? "exit" : "visible"}
              exit="exit"
              variants={animationVariants}
              transition={{ duration: 0.5 }}
            >
              {crypto[currentIndex]?.name}
            </motion.h3>
            <motion.p
              className="text-2xl font-bold text-blue-500"
              initial="hidden"
              animate={isChanging ? "exit" : "visible"}
              exit="exit"
              variants={animationVariants}
              transition={{ duration: 0.5 }}
            >
              ${crypto[currentIndex]?.current_price.toLocaleString()}
            </motion.p>
            <motion.p
              className={`text-sm font-bold ${
                crypto[currentIndex]?.price_change_percentage_24h >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
              initial="hidden"
              animate={isChanging ? "exit" : "visible"}
              exit="exit"
              variants={animationVariants}
              transition={{ duration: 0.5 }}
            >
              {crypto[currentIndex]?.price_change_percentage_24h.toFixed(2)}%
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
