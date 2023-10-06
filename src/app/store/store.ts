import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cosmeticsReducer from './reducers/cosmeticsSlice';

const rootReducer = combineReducers({
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
