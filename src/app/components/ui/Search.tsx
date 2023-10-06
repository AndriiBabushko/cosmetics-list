import React, { FC } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Button, FormControl, Input, InputAdornment, InputLabel, Stack } from '@mui/material';

type Props = {
  onSearchClick: () => void;
  onSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search: FC<Props> = ({ onSearchClick, onSearchTermChange }) => {
  return (
    <Stack spacing={1} direction={{ xs: 'column', sm: 'row' }} className={'bg-gray-200 p-3 rounded-xl'}>
      <FormControl variant="standard">
        <InputLabel htmlFor={'search'} className={'!text-xl'}>
          Search by name
        </InputLabel>
        <Input
          id="search"
          onChange={onSearchTermChange}
          startAdornment={
            <InputAdornment position="start">
              <BiSearch />
            </InputAdornment>
          }
        />
      </FormControl>
      <Button onClick={onSearchClick} variant={'outlined'}>
        Search
      </Button>
    </Stack>
  );
};
