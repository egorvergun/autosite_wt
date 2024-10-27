import { AppBar, Toolbar, Box, Container, Link } from '@mui/material';
import Image from 'next/image';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Логотип */}
          <Box sx={{ mt: 2 }}>
            <Link href="/" sx={{ textDecoration: 'none' }}>
              <Image src={'/logo.png'} width={135} height={100} alt="Company Logo" />
            </Link>
          </Box>

          {/* Навигация */}
          <Box component="nav" sx={{ mt: 2 , mb: 2}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  mx: 2,
                  fontSize: 18,
                }}
              >
                Art & Culture
              </Link>
              <Link
                href="/page2"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  mx: 2,
                  fontSize: 18,
                }}
              >
                Sustainability
              </Link>
              <Link
                href="/services"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  mx: 2,
                  fontSize: 18,
                }}
              >
                Design
              </Link>
              <Link
                href="/projects"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  mx: 2,
                  fontSize: 18,
                }}
              >
                Innovations
              </Link>
              <Link
                href="/contact"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  mx: 2,
                  fontSize: 18,
                }}
              >
                Exclusive
              </Link>
              <Link
                href="/blog"
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  mx: 2,
                  fontSize: 18,
                }}
              >
                Vehicles
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
