import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CryptoContext } from '../Api/CryptoContext';
import { Card } from './ui/Card';

const MyCarousel = ({ isDarkMode }) => {
  const { crypto } = useContext(CryptoContext);

  const settingsLeft = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: 'linear',
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
          slidesToShow: 2,
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
    <div className="relative mx-auto max-w-7xl font-mono bg-white">
      <div className="relative mx-auto max-w-7xl bg-white">
        <Slider {...settingsLeft} className="overflow-hidden px-2">
          {crypto.map((item, index) => (
            <Card
              key={index}
              className="w-full max-w-md transition-colors bg-gray-200 text-gray-700 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-between p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="font-medium">
                      <div>{item.name}</div>
                      <div className="text-sm">
                        ${item.current_price.toFixed(3)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </Slider>
      </div>
      <div className="relative mx-auto max-w-7xl bg-white">
        <Slider {...settingsRight} className="overflow-hidden px-2">
          {crypto.map((item, index) => (
            <Card
              key={index}
              className="w-full max-w-md transition-colors bg-gray-200 text-gray-700 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-between p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="font-medium">
                      <div>{item.name}</div>
                      <div className="text-sm">
                        ${item.current_price.toFixed(3)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MyCarousel;
