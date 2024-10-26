'use client';

import React from 'react';
import { Box } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import dynamic from 'next/dynamic';
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const cars = [
  { src: '/car1.jpg', alt: 'Car 1' },
  { src: '/car2.jpg', alt: 'Car 2' },
  { src: '/car3.jpg', alt: 'Car 3' },
];

const CarCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <Box 
      sx={{
        width: '55%',
        margin: '0 auto', // Центрирование контейнера в родителе
      }}
    >
      <Slider {...settings}>
        {cars.map((car, index) => (
          <Box key={index}>
            <img 
              src={car.src} 
              alt={car.alt} 
              style={{ 
                width: '100%', 
                maxWidth: '100%', 
                height: 'auto', 
                objectFit: 'cover' 
              }} 
            />
          </Box>
        ))}
      </Slider>
      </Box>
  );
};

export default CarCarousel;