import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { UserLayout } from '../../components/layouts/UserLayout';
import { Box, Pagination, Typography } from '@mui/material';
import { fetchCosmeticByName, fetchCosmetics } from '../../store/reducers/actionCreators';
import { Spinner } from '../../components/ui/Spinner';
import { setPageCosmetics, setCurrentPage } from '../../store/reducers/cosmeticsSlice';
import { Search } from '../../components/ui/Search';
import { CosmeticGrid } from '../../components/cosmetics/CosmeticGrid';
import { ErrorPopup } from '../../components/ui/ErrorPopup';

export const Cosmetics = () => {
  const dispatch = useAppDispatch();
  const { pageCosmetics, isLoading, error, currentPage, totalPages } = useAppSelector((state) => state.cosmetics);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCosmetics());
    dispatch(setPageCosmetics());
  }, [dispatch]);

  const onChangePageHandler = (event: ChangeEvent<unknown>, page: number) => {
    dispatch(setCurrentPage(page));
    dispatch(setPageCosmetics());
  };

  const onSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as string;
    setSearchTerm(value);
  };

  const onSearchClick = () => {
    dispatch(fetchCosmeticByName(searchTerm));
    dispatch(setPageCosmetics());
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <UserLayout>
      {error && <ErrorPopup error={error} />}
      <Box
        className={
          'flex flex-col md:flex-row justify-between items-center bg-gray-800 rounded-xl !text-white w-full mt-2 mb-4 p-4'
        }
      >
        <Typography variant={'h3'} className={'!text-xl !font-bold !mb-2'}>
          Cosmetics page
        </Typography>
        <Search onSearchTermChange={onSearchTermChange} onSearchClick={onSearchClick} />
      </Box>

      <CosmeticGrid cosmetics={pageCosmetics} />

      <Box className={'flex justify-center w-full mt-2'}>
        <Pagination
          count={totalPages}
          page={currentPage}
          siblingCount={0}
          shape={'rounded'}
          variant={'outlined'}
          size={'large'}
          onChange={onChangePageHandler}
        />
      </Box>
    </UserLayout>
  );
};
