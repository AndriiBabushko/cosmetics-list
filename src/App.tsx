import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pages } from './app/lib/constants';
import { Root } from './app/pages/Root';
import { Spinner } from './app/components/ui/Spinner';
import { useAppSelector } from './app/hooks/redux';
import { Cosmetics } from './app/pages/cosmetics/Cosmetics';
import { Cosmetic } from './app/pages/cosmetics/Cosmetic';

export const App = () => {
  const { isLoading, error } = useAppSelector((state) => state.site);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <div>{error.error}</div>}
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
