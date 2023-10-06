import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Contacts = () => {
  return (
    <footer className={'bg-gray-300 w-full'}>
      <Container maxWidth={'lg'}>
        <Box className={'flex justify-between flex-col md:flex-row'}>
          <Stack spacing={{ md: 4, xs: 2 }} direction={{ md: 'row', xs: 'column' }} className={'my-3'}>
            <Stack spacing={1} className={'items-center md:items-start'}>
              <Typography variant={'h3'} className={'!text-xl !font-bold'}>
                Contact
              </Typography>
              <NavLink to={'https://t.me/AndriiRaccoon'} className={'text-gray-800 text-lg visited:text-gray-600'}>
                Telegram
              </NavLink>
              <Typography className={'text-gray-800 text-lg'}>andriibabushko@gmail.com</Typography>
            </Stack>
            <Stack spacing={1} className={'items-center md:items-start'}>
              <Typography variant={'h3'} className={'!text-xl !font-bold'}>
                Development
              </Typography>
              <NavLink
                to={'https://github.com/AndriiBabushko/cosmetics-list'}
                className={'text-gray-800 text-lg visited:text-gray-600'}
              >
                Github
              </NavLink>
              <NavLink
                to={'https://cosmetics-list.vercel.app/'}
                className={'text-gray-800 text-lg visited:text-gray-600'}
              >
                Deployment
              </NavLink>
            </Stack>
          </Stack>
          <Stack spacing={1} className={'my-3 items-center md:items-start'}>
            <Typography variant={'h6'} className={'!text-lg text-gray-800'}>
              © 2023 Andrii Babushko
            </Typography>
            <Typography variant={'h6'} className={'!text-lg text-gray-500'}>
              Made in Ukraine, Zhytomyr
            </Typography>
          </Stack>
        </Box>
      </Container>
    </footer>
  );
};
