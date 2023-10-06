import { createAsyncThunk } from '@reduxjs/toolkit';
import CosmeticsService from '../../services/CosmeticsService';
import { IError } from '../../models/IError';
import { ICosmetic } from '../../models/ICosmetic';
import { siteHasError, siteIsLoading, siteIsNotLoading } from './siteSlice';

export const fetchCosmetics = createAsyncThunk<ICosmetic[], undefined, { rejectValue: IError }>(
  'cosmetics/fetchAll',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(siteIsLoading);
    const response = await CosmeticsService.fetchCosmetics();

    if ('error' in response.data.data) {
      const error = response.data.data as IError;
      thunkAPI.dispatch(siteHasError(error));
      return thunkAPI.rejectWithValue(error);
    }

    thunkAPI.dispatch(siteIsNotLoading);

    return response.data.data as ICosmetic[];
  },
);

export const fetchCosmetic = createAsyncThunk<ICosmetic, string, { rejectValue: IError }>(
  'cosmetics/fetchOne',
  async (cosmeticID: string, thunkAPI) => {
    thunkAPI.dispatch(siteIsLoading);
    const response = await CosmeticsService.fetchCosmetic(cosmeticID);

    if ('error' in response.data.data) {
      const error = response.data.data as IError;
      thunkAPI.dispatch(siteHasError(error));
      return thunkAPI.rejectWithValue(error);
    }

    thunkAPI.dispatch(siteIsNotLoading);
    return response.data.data as ICosmetic;
  },
);
