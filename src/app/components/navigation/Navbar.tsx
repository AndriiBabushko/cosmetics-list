import React, { useState } from 'react';
import { Logo } from './Logo';
import { AppBar, Box, Toolbar, Menu, Container, MenuItem, IconButton } from '@mui/material';
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { pages } from '../../lib/constants';
import { FaTshirt } from 'react-icons/fa';
import { NavItem } from './NavItem';

type NavbarPage = {
  label: string;
  key: string;
  link: string;
  icon: React.ReactNode;
};

const navbarPages: NavbarPage[] = [
  {
    label: 'Home',
    key: 'home',
    link: pages.home,
    icon: <AiOutlineHome className={'mr-2 text-xl'} />,
  },
  {
    label: 'Cosmetics',
    key: 'cosmetics',
    link: pages.cosmetics,
    icon: <FaTshirt className={'mr-2 text-xl'} />,
  },
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color={'transparent'} className={'!bg-gray-800'}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Logo className={'hidden md:flex'} />

          <Box className={'flex md:hidden'}>
            <IconButton onClick={handleOpenNavMenu}>
              <RxHamburgerMenu className={'text-3xl text-white'} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              className={'md:hidden'}
            >
              {navbarPages.map((page) => (
                <MenuItem key={page.key}>
                  <NavLink to={page.link} onClick={handleCloseNavMenu}>
                    <NavItem icon={page.icon} className={'w-full !text-black'}>
                      {page.label}
                    </NavItem>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Logo className={'flex-grow justify-center md:hidden'} />
          <Box className={'flex-grow justify-center hidden md:flex'}>
            {navbarPages.map((page) => (
              <NavLink to={page.link} key={page.key} onClick={handleCloseNavMenu}>
                {({ isActive }) => {
                  return (
                    <NavItem icon={page.icon} className={isActive ? '!bg-white !text-gray-800' : '!text-white'}>
                      {page.label}
                    </NavItem>
                  );
                }}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
