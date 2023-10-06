import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { pages } from './app/lib/constants';
import { Root } from './app/pages/Root';
import { Cosmetics } from './app/pages/cosmetics/Cosmetics';
import { Cosmetic } from './app/pages/cosmetics/Cosmetic';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Root />} />
        <Route path={pages.cosmetics} element={<Cosmetics />} />
        <Route path={pages.cosmetics + '/' + pages.cosmeticsID} element={<Cosmetic />} />
      </Routes>
    </BrowserRouter>
  );
};
