import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CryptoContext } from "../Api/CryptoContext";

export default function MyCarousel() {
  const { crypto } = useContext(CryptoContext);

  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative mx-auto max-w-7xl mt-5">
      <div className="relative mx-auto max-w-7xl">
        <Slider {...settings} className="overflow-hidden">
          {crypto.map((item, index) => (
            <div key={index} className="px-2">
              <div className="border border-[#68007a] relative h-[400px] w-[300px] rounded-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="z-0 h-3/4 w-full max-w-xs rounded-md object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                  <div className="flex items-center">
                    <h1 className="text-sm text-[#68007a] bg-gradient-to-r from-[#68007a] via-[#70217e] to-[#68007a] bg-clip-text font-extrabold text-transparent text-center select-auto">
                      Current Price: ${item.current_price.toFixed(3)}
                    </h1>
                  </div>
                  <div className="space-x-2 mt-2">
                    <button
                      type="button"
                      className={`font-medium text-sm px-1 py-2 text-center ${
                        item.price_change_percentage_24h >= 0
                          ? 'text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300'
                          : 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300'
                      }`}
                    >
                      {item.price_change_percentage_24h >= 0 
                        ? `+${item.price_change_percentage_24h.toFixed(2)}%` 
                        : `${item.price_change_percentage_24h.toFixed(2)}%`}
                    </button>
                    <button className="p-2 inline-flex cursor-pointer items-center text-sm hover:text-[#68007a] font-semibold text-[#68007a] border border-[#68007a]">
                      Add to Watchlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
