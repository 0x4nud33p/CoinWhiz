"use client"

import React, { useContext, useEffect, useState } from "react"
import { CryptoContext } from "../Api/CryptoContext"

const MyCarousel = () => {
  const { crypto } = useContext(CryptoContext)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-scroll between crypto data items every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % crypto.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [crypto])

  return (
    <div className="flex justify-center py-6">
      {crypto.length > 0 && (
        <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <img
              className="w-12 h-12"
              src={crypto[currentIndex].image}
              alt={crypto[currentIndex].name}
            />
            <div className="text-right">
              <h3 className="text-lg font-semibold text-white">
                {crypto[currentIndex].name}
              </h3>
              <p className="text-2xl font-bold text-blue-500">
                ${crypto[currentIndex].current_price.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyCarousel
