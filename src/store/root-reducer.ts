import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offerSlice } from './slices/offer-slice/offer-slice';
import { userSlice } from './slices/user-slice/user-slice';

export const rootReducer = combineReducers({
  [NameSpace.Offer]: offerSlice.reducer,
  [NameSpace.User]: userSlice.reducer,
});
