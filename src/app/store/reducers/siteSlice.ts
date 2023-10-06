import { IError } from '../../models/IError';
import { createSlice } from '@reduxjs/toolkit';

type SiteState = {
  isLoading: boolean;
  error: IError | null;
};

const initialState: SiteState = {
  isLoading: false,
  error: null,
};

export const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    siteIsLoading: (state) => {
      state.isLoading = true;
    },
    siteIsNotLoading: (state) => {
      state.isLoading = false;
    },
    siteHasError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { siteIsLoading, siteIsNotLoading, siteHasError } = siteSlice.actions;

export default siteSlice.reducer;
