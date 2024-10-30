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
            It is Brabus auto...
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
          sx={{ 
            position: 'relative',
            backgroundImage: 'url(/Asphalt.png)', // Укажите путь к изображению
            backgroundSize: 'cover', // Закрывает весь контейнер
            backgroundPosition: 'center', // Центрирует изображение
            height: { xs: '50vh', md: '100vh' },
            width: '100%',
          }} 
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