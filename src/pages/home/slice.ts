import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/configureStore';

export interface HomeSlice {
  userData: {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    authuser: string;
    prompt: string;
  }
}

const initialState: HomeSlice = {
  userData: {
    access_token: '',
    token_type: '',
    expires_in: 3599,
    scope: '',
    authuser: '0',
    prompt: '',
  }
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = homeSlice.actions;

export const homeReducer = homeSlice.reducer;
