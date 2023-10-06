import { createAsyncThunk } from '@reduxjs/toolkit';
import CosmeticsService from '../../services/CosmeticsService';
import { IError } from '../../models/IError';
import { ICosmetic } from '../../models/ICosmetic';
import { setPageCosmetics } from './cosmeticsSlice';

export const fetchCosmetics = createAsyncThunk<ICosmetic[], undefined, { rejectValue: IError }>(
  'cosmetics/fetchAll',
  async (_, thunkAPI) => {
    const response = await CosmeticsService.fetchCosmetics();

    if ('error' in response.data.data) {
      const error = response.data.data as IError;
      return thunkAPI.rejectWithValue(error);
    }

    thunkAPI.dispatch(setPageCosmetics(response.data.data as ICosmetic[]));

    return response.data.data as ICosmetic[];
  },
);

export const fetchCosmetic = createAsyncThunk<ICosmetic, string | undefined, { rejectValue: IError }>(
  'cosmetics/fetchOne',
  async (cosmeticID: string | undefined, thunkAPI) => {
    const response = await CosmeticsService.fetchCosmetic(cosmeticID);

    if ('error' in response.data.data) {
      const error = response.data.data as IError;
      return thunkAPI.rejectWithValue(error);
    }

    return response.data.data as ICosmetic;
  },
);

export const fetchCosmeticByName = createAsyncThunk<ICosmetic[], string | undefined, { rejectValue: IError }>(
  'cosmetics/fetchByName',
  async (cosmeticName: string | undefined, thunkAPI) => {
    const response = await CosmeticsService.fetchCosmeticByName(cosmeticName);

    if ('error' in response.data.data) {
      const error = response.data.data as IError;
      return thunkAPI.rejectWithValue(error);
    }

    return response.data.data as ICosmetic[];
  },
);
