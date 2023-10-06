import React from 'react';
import { UserLayout } from '../components/layouts/UserLayout';
import { Box } from '@mui/material';

export const Root = () => {
  return (
    <UserLayout>
      <Box className={'flex justify-center'}></Box>
    </UserLayout>
  );
};
