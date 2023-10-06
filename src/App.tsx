import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pages } from './app/lib/constants';
import { Root } from './app/pages/Root';
import { Spinner } from './app/components/ui/Spinner';
import { useAppSelector } from './app/hooks/redux';
import { Cosmetics } from './app/pages/cosmetics/Cosmetics';
import { Cosmetic } from './app/pages/cosmetics/Cosmetic';
import { Alert } from '@mui/material';

export const App = () => {
  const { isLoading, error } = useAppSelector((state) => state.site);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <Alert severity={error.status == 200 ? 'success' : error.status == 400 ? 'warning' : 'error'}></Alert>}
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Root />} />
          <Route path={pages.cosmetics} element={<Cosmetics />} />
          <Route path={pages.cosmetics + '/' + pages.cosmeticsID} element={<Cosmetic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
