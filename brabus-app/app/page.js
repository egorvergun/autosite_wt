'use client';

import { Box, Typography, Button } from '@mui/material';
import homeStyles from '../styles/HomeStyles'; // Импорт стилей
import CarCarousel from '../components/CarCarousel';

const Home = () => {
  return (
    <Box width={'100%'} display={'flex'} flexDirection={'column'} backgroundColor={'black'}>
        <Box sx={homeStyles.container}>
        {/* Контейнер для текста */}
        <Box sx={homeStyles.textContainer}>
            <Typography variant="h3" sx={homeStyles.headline}>
            On fingertips...<br />
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
        </Box>
        <Box 
          width={'100%'} 
          margin={'0 auto'} 
          sx={{ 
            backgroundImage: 'url(/Asphalt.png)', // Укажите путь к изображению
            backgroundSize: 'cover', // Закрывает весь контейнер
            backgroundPosition: 'center', // Центрирует изображение
          }} 
        >        
          <CarCarousel />
        </Box>
    </Box>
  );
};

export default Home;