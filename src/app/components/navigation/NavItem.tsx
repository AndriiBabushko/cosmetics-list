import { Box, Button } from '@mui/material';
import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
};

export const NavItem: FC<Props> = ({ children, className, onClickHandler, icon }) => {
  return (
    <Button onClick={onClickHandler} className={`text-white block ${className}`}>
      <Box className={'flex items-center'}>
        {icon}
        {children}
      </Box>
    </Button>
  );
};
