import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    id: 1,
    img: "https://ik.imagekit.io/tymm1oky9j/tinified/image1.jpg?updatedAt=1716009713908",
  },
  {
    id: 2,
    img: "https://ik.imagekit.io/tymm1oky9j/tinified/image2.jpg?updatedAt=1716009713785",
  },
  {
    id: 3,
    img: "https://ik.imagekit.io/tymm1oky9j/tinified/image4.jpg?updatedAt=1716009713719",
  },
  {
    id: 4,
    img: "https://ik.imagekit.io/tymm1oky9j/tinified/image3.jpg?updatedAt=1716009713533",
  },
  {
    id: 5,
    img: "https://ik.imagekit.io/tymm1oky9j/tinified/image5.jpg?updatedAt=1716009713544",
  },
];

export default function MyCarousel() {
  const settings = {
    accessibility: true,
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 3, 
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
          {images.map((image) => (
            <div key={image.id} className="relative h-[400px] w-[300px] rounded-md mx-2">
              <img
                src={image.img}
                alt="Image"
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-[#68007a]">Delba</h1>
                <p className="mt-2 text-sm text-[#68007a]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
                </p>
                <button className="mt-2 p-2 inline-flex cursor-pointer items-center text-sm hover:text-[#68007a] font-semibold text-[#68007a] border border-[#68007a]">
                  Add to Watchlist
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
