import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface IAuthState {
  isLogined: boolean;
}

const initialState: IAuthState = {
  isLogined: false,
};

const persistConfig = {
  key: 'auth',
  version: 1,
  storage: storage,
  whitelist: ['isLogined'],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateLoginStatus: (state, action: PayloadAction<boolean>) => {
      state.isLogined = action.payload;
    },
  },
});

export const { updateLoginStatus } = authSlice.actions;

export default persistReducer(persistConfig, authSlice.reducer);
