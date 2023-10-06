import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCosmetics } from '../../store/reducers/actionCreators';
import { UserLayout } from '../../components/layouts/UserLayout';
import { Pagination } from '@mui/material';

export const Cosmetics = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cosmetics } = useAppSelector((state) => state.cosmetics);
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   dispatch(fetchCosmetics());
  // }, []);

  const onChangePageHandler = () => {};

  return (
    <UserLayout>
      <h1>Cosmetics page</h1>
      {JSON.stringify(cosmetics, null, 2)}
      <Pagination count={10} page={currentPage} onChange={onChangePageHandler} />
    </UserLayout>
  );
};
