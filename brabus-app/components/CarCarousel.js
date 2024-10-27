'use client';

import React from 'react';
import { Box } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import dynamic from 'next/dynamic';
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const CarCarousel = () => {
  const settings = {
    dots: false,
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
        width: '100%',
        margin: '0 auto',
      }}
    >
      <Slider {...settings}>
        {/* Слайд 1 */}
        <Box 
          sx={{
            width: '100%',
            overflow: 'hidden',
            mb: 5,
            display: 'flex',
            justifyItems: 'center'
          }}
        >
          <Box width={'70%'}>
          <img 
            src='/car1.png' 
            alt='Car 2' 
            style={{ 
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'cover',
            }} 
          />
          </Box>
        </Box>

        {/* Слайд 2 */}
        <Box 
          sx={{
            width: '100%',
            overflow: 'hidden',
            mb: 5,
            display: 'flex',
            justifyItems: 'center'
          }}
        >
          <Box width={'70%'}>
          <img 
            src='/car2.png' 
            alt='Car 2' 
            style={{ 
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'cover',
            }} 
          />
          </Box>
        </Box>

        {/* Слайд 3 */}
        <Box 
          sx={{
            width: '100%',
            overflow: 'hidden',
            mb: 5,
            display: 'flex',
            justifyItems: 'center'
          }}
        >
          <Box width={'70%'}>
          <img 
            src='/car3.png' 
            alt='Car 2' 
            style={{ 
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'cover',
            }} 
          />
          </Box>
        </Box>
        
      </Slider>
    </Box>
  );
};

export default CarCarousel;
