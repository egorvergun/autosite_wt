import { Box, Typography } from '@mui/material';

const cardData = [
  {
    id: 1,
    title: "4x4 & 6x6",
    subtitle: "True off-road kings",
    image: "/card1.png",
  },
  {
    id: 2,
    title: "Sport",
    subtitle: "The most active people – the most active cars",
    image: "/card2.png",
    border: "1px solid #333"
  },
  {
    id: 3,
    title: "Luxor",
    subtitle: "Ready for any natural conditions",
    image: "/card3.png",
  },
];

const CardSection = () => {
  return (
    <Box 
      sx={{
        backgroundColor: 'black',
        padding: '40px 0',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'BankGothicMedium',
          color: 'white',
          textTransform: 'uppercase',
          mb: 2,
        }}
      >
        This is Your Journey
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: 'white',
          mb: 4,
          fontFamily: 'BankGothicMedium',
          letterSpacing: '5px',
        }}
      >
        with brabus...
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          px: { xs: 2, md: 4 },
        }}
      >
        {cardData.map((card, index) => (
          <Box
          key={card.id}
          sx={{
            color: 'white',
            width: { xs: '100%', sm: '80%', md: '30%' },
            maxWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
            borderLeft: { xs: 'none', md: card.border },
            borderRight: { xs: 'none', md: card.border },
            borderTop: { xs: card.border, md: 'none' },
            borderBottom: { xs: card.border, md: 'none' },
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src={card.image}
            alt={card.title}
            sx={{
              width: '100%',
              height: 'auto',
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'BankGothicMedium',
              letterSpacing: '0px',
              mt: 2,
              textAlign: 'left', // Выравнивание текста по левому краю
              width: '100%', // Занимает всю ширину, чтобы textAlign применился
            }}
          >
            {card.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily:'Amazon Ember Thin',
              color: '#ccc',
              mt: 1,
              textAlign: 'left', // Выравнивание текста по левому краю
              width: '100%', // Занимает всю ширину, чтобы textAlign применился
            }}
          >
            {card.subtitle}
          </Typography>
        </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CardSection;
