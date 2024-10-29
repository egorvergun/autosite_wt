'use client';

import React, { useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import dynamic from 'next/dynamic';
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const CarCarousel = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    lazyLoad: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  // Массив с данными для слайдов
  const slides = [
    { id: 1, src: '/car1.png', alt: 'Car 1' },
    { id: 2, src: '/car2.png', alt: 'Car 2' },
    { id: 3, src: '/car3.png', alt: 'Car 3' },
  ];

  return (
    <Box 
      sx={{
        position: 'relative',
        width: '100%',
        // height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        height: { xs: '50vh', md: '100vh' },
      }}
    >

      <Box sx={{ width: '100%', zIndex: 1 }}>
        <Slider 
          ref={sliderRef}
          {...settings}
        >
          {slides.map((slide) => (
            <Box 
              key={slide.id}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box 
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box 
                  component="img"
                  src={slide.src}
                  alt={slide.alt}
                  sx={{
                    width: { xs: '90%', sm: '80%', md: '70%' },
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                  
                />
                {slide.id === 1 && (
                    <Typography 
                      variant="h3" 
                      sx={{
                        position: 'absolute',
                        top: '10%',
                        width: '100%',
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                        textAlign: 'center',
                        color: 'Black',
                        zIndex: 3,
                      }}
                    >
                      Amazing Auto Park
                    </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Кнопки для пролистывания поверх слайдера */}
      <Button
        onClick={previous}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '30px',
          transform: 'translateY(-50%)',
          backgroundImage: 'url(/left_button_arrow.png)',
          backgroundSize: 'cover',
          width: { xs: '30px', md: '50px' },
          height: { xs: '30px', md: '50px' },
          opacity: {xs: '40%', md: '100%'},
          minWidth: 'auto',
          p: 0,
          zIndex: 2,
        }}
      />
      <Button
        onClick={next}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '30px',
          transform: 'translateY(-50%)',
          backgroundImage: 'url(/right_button_arrow.png)',
          backgroundSize: 'cover',
          width: { xs: '30px', md: '50px' },
          height: { xs: '30px', md: '50px' },
          opacity: {xs: '30%', md: '100%'},
          minWidth: 'auto',
          p: 0,
          zIndex: 2,
        }}
      />

      {/* Кнопка Order снизу */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          position: 'absolute',
          bottom: '20px',
          textTransform: 'uppercase',
          backgroundColor: 'black',
          borderRadius: '40px',
          width: "250px",
          px: 3,
          py: 1,
          zIndex: 10,
          '&:hover': {
            backgroundColor: '#262626',
          },
        }}
      >
        Order
      </Button>
    </Box>
  );
};

export default CarCarousel;
