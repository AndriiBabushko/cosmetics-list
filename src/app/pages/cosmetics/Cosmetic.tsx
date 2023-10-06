import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCosmetic } from '../../store/reducers/actionCreators';
import { UserLayout } from '../../components/layouts/UserLayout';
import { ErrorPopup } from '../../components/ui/ErrorPopup';
import { Spinner } from '../../components/ui/Spinner';
import {
  Alert,
  Box,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Tooltip,
  Typography,
} from '@mui/material';
import { BsBoxes, BsCalendar2Date, BsPen } from 'react-icons/bs';
import { capitalize, formatDate } from '../../lib/constants';
import { GrMagic } from 'react-icons/gr';
import { TagsGrid } from '../../components/ui/TagsGrid';
import { FaGamepad } from 'react-icons/fa';
import { PiTShirt } from 'react-icons/pi';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineRollback } from 'react-icons/ai';

export const Cosmetic = () => {
  const { cosmeticID } = useParams();
  const dispatch = useAppDispatch();
  const { cosmetic, isLoading, error } = useAppSelector((state) => state.cosmetics);

  useEffect(() => {
    dispatch(fetchCosmetic(cosmeticID));
  }, [dispatch]);

  const goBackHandler = () => {
    window.history.back();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <UserLayout>
      {error && <ErrorPopup error={error} />}
      {cosmetic ? (
        <Card className={'flex flex-col-reverse md:flex-row'}>
          <Box sx={{ width: { xs: '100%', md: '50%' } }} className={'flex flex-col'}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <List
                sx={{ width: '100%', bgcolor: 'background.paper', fontSize: '24px' }}
                subheader={
                  <ListSubheader component="div" className={'flex flex-row items-center pb-[18px]'}>
                    <Box
                      className={
                        'flex text-[24px] rounded bg-gray-200 p-2 mr-4 cursor-pointer hover:bg-gray-300 transition-colors duration-300 ease-in-out'
                      }
                      onClick={goBackHandler}
                    >
                      <AiOutlineRollback />
                    </Box>
                    <Typography variant={'h3'} sx={{ fontSize: '24px' }}>
                      Info about {cosmetic.name}
                    </Typography>
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemIcon>
                    <BsPen />
                  </ListItemIcon>
                  <Tooltip title={'Description'} followCursor>
                    <ListItemText>{cosmetic.description}</ListItemText>
                  </Tooltip>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BsBoxes />
                  </ListItemIcon>
                  <Tooltip title={'Type'} followCursor>
                    <ListItemText>{capitalize(cosmetic.type.displayValue)}</ListItemText>
                  </Tooltip>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GrMagic />
                  </ListItemIcon>
                  <Tooltip title={'Rarity'} followCursor>
                    <ListItemText>{cosmetic.rarity.displayValue}</ListItemText>
                  </Tooltip>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BsCalendar2Date />
                  </ListItemIcon>
                  <Tooltip title={'Added'} followCursor>
                    <ListItemText>{formatDate(cosmetic.added)}</ListItemText>
                  </Tooltip>
                </ListItem>
                {cosmetic.searchTags && (
                  <ListItem>
                    <ListItemIcon>
                      <BiSearch />
                    </ListItemIcon>
                    <TagsGrid tags={cosmetic.searchTags} />
                  </ListItem>
                )}
                {cosmetic.gameplayTags && (
                  <ListItem>
                    <ListItemIcon>
                      <FaGamepad />
                    </ListItemIcon>
                    <TagsGrid tags={cosmetic.gameplayTags} />
                  </ListItem>
                )}
                {cosmetic.metaTags && (
                  <ListItem>
                    <ListItemIcon>
                      <PiTShirt />
                    </ListItemIcon>
                    <TagsGrid tags={cosmetic.metaTags} />
                  </ListItem>
                )}
              </List>
            </CardContent>
          </Box>
          <CardMedia
            component={'img'}
            sx={{ width: { xs: '100%', md: '50%' } }}
            image={cosmetic.images.icon}
            alt={cosmetic.name}
          />
        </Card>
      ) : (
        <Alert variant={'outlined'} severity={'warning'}>
          No cosmetic found!
        </Alert>
      )}
    </UserLayout>
  );
};
