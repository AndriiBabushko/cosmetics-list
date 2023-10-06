import { createSlice } from '@reduxjs/toolkit';
import { ICosmetic } from '../../models/ICosmetic';
import { fetchCosmetic, fetchCosmetics } from './actionCreators';

type CosmeticsState = {
  cosmetics: ICosmetic[];
  cosmetic: ICosmetic | null;
};

const initialState: CosmeticsState = {
  cosmetics: [],
  cosmetic: null,
};

export const cosmeticsSlice = createSlice({
  name: 'cosmetics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCosmetics.fulfilled, (state, action) => {
      state.cosmetics = action.payload;
    });
    builder.addCase(fetchCosmetic.fulfilled, (state, action) => {
      state.cosmetic = action.payload;
    });
  },
});
export default cosmeticsSlice.reducer;
