import React, { FC } from 'react';
import { Button } from '@mui/material';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClickHandler?: () => void;
  className?: string;
};

export const AppButton: FC<Props> = ({ children, type = 'button', onClickHandler, className }) => {
  return (
    <Button type={type} onClick={onClickHandler} className={`${className} px-4 py-2 text-white rounded`}>
      {children}
    </Button>
  );
};
