import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { loadOffers, setOffersLoadingStatus } from './action';
import { APIRoute } from '../const';
import { ShortOffers } from 'types/offer.js';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
 }>(
   'loadOffers',
   async (_arg, { dispatch, extra: api }) => {
     dispatch(setOffersLoadingStatus(true));
     const { data } = await api.get<ShortOffers>(APIRoute.Offers);
     dispatch(setOffersLoadingStatus(false));

     dispatch(loadOffers(data));
   },
 );
