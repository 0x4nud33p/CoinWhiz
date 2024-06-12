import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CryptoContext } from "../Api/CryptoContext";

export default function MyCarousel() {
  const { crypto } = useContext(CryptoContext);

  const settingsLeft = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  const settingsRight = {
    ...settingsLeft,
    rtl: true, 
    initialSlide: crypto.length - 1,
  };

  return (
    <div className="relative mx-auto max-w-7xl font-mono">
      <div className="relative mx-auto max-w-7xl">
        <Slider {...settingsLeft} className="overflow-hidden">
          {crypto.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col mt-6 border border-[#68007a] text-gray-700 shadow-md bg-clip-border rounded-xl w-96"
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="font-medium dark:text-white">
                    <div>{item.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                       ${item.current_price.toFixed(3)}
                    </div>
                  </div>
                </div>
              </div>
              {/* //buttons */}
            </div>
          ))}
        </Slider>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <Slider {...settingsRight} className="overflow-hidden">
          {crypto.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col mt-6 border border-[#68007a] text-gray-700 shadow-md bg-clip-border rounded-xl w-96"
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="font-medium dark:text-white">
                    <div>{item.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      ${item.current_price.toFixed(3)}
                    </div>
                  </div>
                </div>
              </div>
              {/* //buttons */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
