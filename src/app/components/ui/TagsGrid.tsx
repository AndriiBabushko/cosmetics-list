import React, { FC } from 'react';
import { Chip, Grid } from '@mui/material';

type Props = {
  tags: string[];
};

export const TagsGrid: FC<Props> = ({ tags }) => {
  return (
    <Grid container spacing={2}>
      {tags.map((tag) => (
        <Grid item key={tag}>
          <Chip label={tag} variant={'outlined'} />
        </Grid>
      ))}
    </Grid>
  );
};
