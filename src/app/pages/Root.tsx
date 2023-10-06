import React from 'react';
import { UserLayout } from '../components/layouts/UserLayout';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { pages } from '../lib/constants';

export const Root = () => {
  return (
    <UserLayout>
      <Box className={'flex justify-center items-center'}>
        <Card variant={'outlined'}>
          <CardMedia
            className={'h-min'}
            component={'img'}
            alt={'Cosmetics App'}
            image={'/assets/fortnite-layout.jpg'}
            title={'Cosmetics App'}
          />
          <CardContent>
            <Typography gutterBottom variant={'h1'} className={'!text-3xl '}>
              Cosmetic App
            </Typography>
            <Typography color={'text.secondary'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci aliquam asperiores atque
              autem.
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink to={pages.cosmetics}>
              <Button size={'medium'} className={'!font-bold'}>
                Get Started
              </Button>
            </NavLink>
          </CardActions>
        </Card>
      </Box>
    </UserLayout>
  );
};
