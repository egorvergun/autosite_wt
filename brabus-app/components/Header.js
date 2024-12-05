"use client"; 

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
    { text: 'Hlavná', href: '/' },
    { text: 'Záľuby', href: '/page2' },
    { text: 'Vozidlá', href: '/page3' },
    { text: 'Sekcia zmien', href: '/changelog' },
  ];

  const authItems = [
    { text: 'Registrácia', href: '/page4' },
    { text: 'Login', href: '/login' },
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
          <Box sx={{ my: 2 }}>
            <Link href="/" sx={{ textDecoration: 'none' }}>
              <Image src={'/logo.png'} width={135} height={100} alt="Company Logo" />
            </Link>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>

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
                  fontFamily: 'Amazon Ember Light',
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

          <Box
            component="nav"
            sx={{
              display: { xs: 'none', md: 'flex' },
              mb: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {authItems.map((item) => (
              <Link
                key={item.text}
                href={item.href}
                sx={{
                  fontFamily: 'Amazon Ember Light',
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
                <Link href={item.href} sx={{textDecoration: 'none', color: 'white', width: '100%' }}>
                  <ListItemText primary={item.text} sx={{ textAlign: 'center'}} />
                </Link>
              </ListItem>
            ))}
            <ListItem>
              <Box sx={{ width: '100%', textAlign: 'center', color: 'white' }}>
                <hr />
              </Box>
            </ListItem>
            {authItems.map((item) => (
              <ListItem button key={item.text}>
                <Link href={item.href} sx={{textDecoration: 'none', color: 'white', width: '100%' }}>
                  <ListItemText primary={item.text} sx={{ textAlign: 'center'}} />
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
