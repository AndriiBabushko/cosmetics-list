import { createAsyncThunk } from '@reduxjs/toolkit';
import CosmeticsService from '../../services/CosmeticsService';
import { IError } from '../../models/IError';
import { ICosmetic } from '../../models/ICosmetic';
import { siteHasError, siteIsLoading, siteIsNotLoading } from './siteSlice';

export const fetchCosmetics = createAsyncThunk('cosmetics/fetchAll', async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch(siteIsLoading);
    const response = await CosmeticsService.fetchCosmetics();

    if ('error' in response.data.data) {
      throw response.data.data as IError;
    }

    thunkAPI.dispatch(siteIsNotLoading);

    return response.data.data as ICosmetic[];
  } catch (e: any) {
    thunkAPI.dispatch(siteHasError(e as IError));
    return thunkAPI.rejectWithValue(e as IError);
  }
});

export const fetchCosmetic = createAsyncThunk('cosmetics/fetchOne', async (cosmeticID: string, thunkAPI) => {
  try {
    thunkAPI.dispatch(siteIsLoading);
    const response = await CosmeticsService.fetchCosmetic(cosmeticID);

    if ('error' in response.data.data) {
      throw response.data.data as IError;
    }

    thunkAPI.dispatch(siteIsNotLoading);
    return response.data.data as ICosmetic;
  } catch (e: any) {
    thunkAPI.dispatch(siteHasError(e as IError));
    return thunkAPI.rejectWithValue(e as IError);
  }
});
