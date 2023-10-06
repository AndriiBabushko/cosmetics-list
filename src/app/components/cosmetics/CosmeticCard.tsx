import React, { FC } from 'react';
import { ICosmetic } from '../../models/ICosmetic';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { pages } from '../../lib/constants';

type Props = { cosmetic: ICosmetic; isDetailed?: boolean };

export const CosmeticCard: FC<Props> = ({ cosmetic, isDetailed = false }) => {
  const navigate = useNavigate();

  const actionHandler = () => {
    navigate(pages.cosmetics + '/' + cosmetic.id);
  };

  return (
    <Card>
      <CardActionArea onClick={actionHandler}>
        <CardMedia
          component={'img'}
          image={cosmetic.images.icon}
          alt={cosmetic.name}
          className={`lg:h-[200px] md:h-[250px] sm:h-[300px]`}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {cosmetic.name}
          </Typography>
          <Typography color="text.secondary">{cosmetic.description}</Typography>
          {isDetailed && (
            <>{cosmetic.searchTags && cosmetic.searchTags.map((tag) => <Chip variant={'outlined'} label={tag} />)}</>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NavLink to={pages.cosmetics + '/' + cosmetic.id}>
          <Button size="small" color="primary">
            View details
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};
