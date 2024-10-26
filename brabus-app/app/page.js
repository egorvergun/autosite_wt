'use client';

import { Box, Typography, Button } from '@mui/material';
import homeStyles from '../styles/HomeStyles'; // Импорт стилей
import CarCarousel from '../components/CarCarousel';

const Home = () => {
  return (
    <Box width={'100%'} display={'flex-column'}>
        <Box sx={homeStyles.container}>
        {/* Контейнер для текста */}
        <Box sx={homeStyles.textContainer}>
            <Typography variant="h3" sx={homeStyles.headline}>
            On fingertips...<br />
            It is Brabus car
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
        <CarCarousel />
    </Box>
  );
};

export default Home;