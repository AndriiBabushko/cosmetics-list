import React, { ChangeEvent, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { UserLayout } from '../../components/layouts/UserLayout';
import { Pagination } from '@mui/material';

export const Cosmetics = () => {
  const { cosmetics } = useAppSelector((state) => state.cosmetics);
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   dispatch(fetchCosmetics());
  // }, []);

  const onChangePageHandler = (event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <UserLayout>
      <h1>Cosmetics page</h1>
      {JSON.stringify(cosmetics, null, 2)}
      <Pagination count={10} page={currentPage} onChange={onChangePageHandler} />
    </UserLayout>
  );
};
