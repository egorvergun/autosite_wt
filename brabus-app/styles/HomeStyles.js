// styles/HomeStyles.js

import CarCarousel from "@/components/CarCarousel";
import zIndex from "@mui/material/styles/zIndex";

const homeStyles = {
    container: {
      height: '100vh', // высота на всю страницу
      backgroundImage: 'url(/car.png)', // путь к изображению машины
      backgroundSize: 'cover', // изображение покрывает всю область
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'left',
      alignItems: 'center', // выравнивание по вертикали (слева)
      paddingLeft: '5%', // отступ слева для текста
      position: 'relative',
      color: 'white',
      textAlign: 'left', // текст выровнен по левому краю
    },
    textContainer: {
      position: 'relative',
      zIndex: 10,
      marginTop: '20%', // отступ сверху для позиционирования по вертикали
    },
    headline: {
      fontFamily: 'BankGothicMedium',
      whiteSpace: 'nowrap',
      fontSize: { xs: '2rem', md: '3rem' },
      mb: 1,
    },
    subheadline: {
      fontFamily: 'Amazon Ember Regular',
      mb: 3,
    },
    button: {
      fontFamily: 'Amazon Ember Light',
      fontWeigth: 100,
      color: 'white',
      borderColor: 'white',
      borderRadius: '50px',
      '&:hover': {
        backgroundColor: 'white',
        color: 'black',
      },
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      zIndex: 0,
    },
    fadeUp: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '30%',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      zIndex: 1,
    },
    fadeDown: {
      
      position: 'absolute',
      top: 0,
      left: 0,
      height: '30%',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      zIndex: 4,
    },
    carCarousel:{
        position: 'relative',
        backgroundImage: 'url(/Asphalt.png)', // Укажите путь к изображению
        backgroundSize: 'cover', // Закрывает весь контейнер
        backgroundPosition: 'center', // Центрирует изображение
        height: { xs: '50vh', md: '100vh' },
        width: '100%',
      }

  };
  
  export default homeStyles;
  