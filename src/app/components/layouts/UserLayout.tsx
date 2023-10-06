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
      <main className={'bg-gray-100 flex-grow'}>
        <Container maxWidth={'lg'} className={'py-[25px]'}>
          {children}
        </Container>
      </main>
      <Contacts />
    </>
  );
};
