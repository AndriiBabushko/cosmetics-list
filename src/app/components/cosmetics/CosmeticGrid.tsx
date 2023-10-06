import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { ICosmetic } from '../../models/ICosmetic';
import { CosmeticCard } from './CosmeticCard';

type Props = { cosmetics: ICosmetic[] };

export const CosmeticGrid: FC<Props> = ({ cosmetics }) => {
  return (
    <Grid container spacing={2}>
      {cosmetics.map((cosmetic) => (
        <Grid item key={cosmetic.id} xs={12} sm={6} md={4} lg={3}>
          <CosmeticCard cosmetic={cosmetic} />
        </Grid>
      ))}
    </Grid>
  );
};
