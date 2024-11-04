'use client';

import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, Divider } from '@mui/material';
import homeStyles from '../styles/HomeStyles'; // Импорт стилей
import CarCarousel from '../components/CarCarousel';
import CardSection from '@/components/cardSection';

const Home = () => {
  return (
    <Box width={'100%'} display={'flex'} flexDirection={'column'} backgroundColor={'black'}>
        <Box sx={homeStyles.container}>
          {/* Контейнер для текста */}
          <Box sx={homeStyles.textContainer}>
            <Typography variant="h3" sx={homeStyles.headline}>
                On fingertips... <br />
                It is Brabus.
            </Typography>
            <Typography variant="h6" sx={homeStyles.subheadline}>
            Because you CAN
            </Typography>

            {/* Кнопка */}
            <Button variant="outlined" sx={homeStyles.button}>
              DISCOVER NOW
            </Button>
          </Box>

              {/* Тёмный оверлей для улучшения видимости текста */}
              <Box sx={homeStyles.overlay} />
              <Box component="img" src={'/fade2.png'} sx={homeStyles.fadeUp} />
          </Box>
          
        <Box 
          sx={homeStyles.carCarousel} 
        >
          <Box  component="img" src={'/fade.png'} sx={homeStyles.fadeDown} />     
          <CarCarousel />
          <Box  component="img" src={'/fade2.png'} sx={homeStyles.fadeUp} />
        </Box>
          <CardSection />
    </Box>
  );
};

export default Home;