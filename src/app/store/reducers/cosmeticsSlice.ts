import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICosmetic } from '../../models/ICosmetic';
import { fetchCosmetic, fetchCosmeticByName, fetchCosmetics } from './actionCreators';
import { IError } from '../../models/IError';
import { cosmeticsPerPage } from '../../lib/constants';

type CosmeticsState = {
  cosmetics: ICosmetic[];
  pageCosmetics: ICosmetic[];
  filteredCosmetics: ICosmetic[];
  cosmetic: ICosmetic | null;
  isLoading: boolean;
  error: IError | null;
  currentPage: number;
  totalPages: number;
};

const initialState: CosmeticsState = {
  cosmetics: [],
  pageCosmetics: [],
  filteredCosmetics: [],
  cosmetic: null,
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

export const cosmeticsSlice = createSlice({
  name: 'cosmetics',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageCosmetics: (state, action: PayloadAction<ICosmetic[] | undefined>) => {
      const start = (state.currentPage - 1) * cosmeticsPerPage;
      const end = start + cosmeticsPerPage;
      if (action.payload) state.pageCosmetics = action.payload.slice(start, end);
      else state.pageCosmetics = state.cosmetics.slice(start, end);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCosmetics.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.cosmetics = action.payload;
      state.totalPages = Math.ceil(action.payload.length / cosmeticsPerPage);
    });
    builder.addCase(fetchCosmetics.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCosmetics.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as IError;
    });
    builder.addCase(fetchCosmetic.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.cosmetic = action.payload;
    });
    builder.addCase(fetchCosmetic.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCosmetic.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as IError;
    });
    builder.addCase(fetchCosmeticByName.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.filteredCosmetics = action.payload;
      state.totalPages = Math.ceil(action.payload.length / cosmeticsPerPage);
    });
    builder.addCase(fetchCosmeticByName.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCosmeticByName.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as IError;
    });
  },
});

export const { setCurrentPage, setPageCosmetics } = cosmeticsSlice.actions;
export default cosmeticsSlice.reducer;
