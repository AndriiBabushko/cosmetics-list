import { combineReducers, configureStore } from '@reduxjs/toolkit';
import siteReducer from './reducers/siteSlice';
import cosmeticsReducer from './reducers/cosmeticsSlice';

const rootReducer = combineReducers({
  site: siteReducer,
  cosmetics: cosmeticsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
