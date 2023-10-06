import React, { FC } from 'react';
import { Navbar } from '../navigation/Navbar';
import { Contacts } from '../navigation/Contacts';
import { Container } from '@mui/material';

type Props = {
  children: React.ReactNode;
};

export const UserLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={'pt-[80px]'}>
        <Container maxWidth={'lg'}>{children}</Container>
      </main>
      <Contacts />
    </>
  );
};
