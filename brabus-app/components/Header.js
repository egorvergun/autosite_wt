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
          <Box sx={{ my: 2 }}>
            <Link href="/" sx={{ textDecoration: 'none' }}>
              <Image src={'/logo.png'} width={100} height={100} alt="Company Logo" />
            </Link>
          </Box>

          {/* Навигация */}
          <Box component="nav" sx={{ mt: 2 }}>
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
                Home
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
                About
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
                Gnida
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
                Projects
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
                Contact
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
                Blog
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
