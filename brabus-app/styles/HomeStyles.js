// styles/HomeStyles.js

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
      zIndex: 1,
      marginTop: '20%', // отступ сверху для позиционирования по вертикали
    },
    headline: {
      fontWeight: 'bold',
      mb: 2,
    },
    subheadline: {
      mb: 4,
    },
    button: {
      color: 'white',
      borderColor: 'white',
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
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // полупрозрачный черный фон
      zIndex: 0,
    },
  };
  
  export default homeStyles;
  