"use client"; // Добавьте эту строку в начало

import { AppBar, Toolbar, Box, Container, Link, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Art & Culture', href: '/' },
    { text: 'Sustainability', href: '/page2' },
    { text: 'Design', href: '/services' },
    { text: 'Exclusive', href: '/contact' },
    { text: 'Vehicles', href: '/blog' },
    { text: 'Change Log', href: '/changelog' },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Кнопка слева на маленьких экранах */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}>
            <IconButton color="inherit">
              <VisibilityIcon /> {/* Замените на нужный вам иконку */}
            </IconButton>
          </Box>

          {/* Логотип */}
          <Box sx={{ my: 2 }}>
            <Link href="/" sx={{ textDecoration: 'none' }}>
              <Image src={'/logo.png'} width={135} height={100} alt="Company Logo" />
            </Link>
          </Box>

          {/* Кнопка меню на маленьких экранах */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Навигация для больших экранов */}
          <Box
            component="nav"
            sx={{
              display: { xs: 'none', md: 'flex' },
              mb: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {menuItems.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  mx: 2,
                  fontSize: 18,
                }}
              >
                {item.text}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>

      {/* Выпадающее меню для маленьких экранов */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250, backgroundColor: 'black', height: '100%' }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text}>
                <Link href={item.href} sx={{ textDecoration: 'none', color: 'white', width: '100%' }}>
                  <ListItemText primary={item.text} sx={{ textAlign: 'center' }} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
