import { AxiosError, AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, ErrorInfo, State } from '../types/state.js';
import { setOffer, setOffers, setError, setOffersLoadingStatus, setNearbyOffers } from './action';
import { APIRoute } from '../const';
import { FullOffer, ShortOffers } from 'types/offer.js';


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

    dispatch(setOffers(data));
  },
);


export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loadOffer',
  async (id, { dispatch, extra: api }) => {
    await api.get<FullOffer>(`${APIRoute.Offers}/${id}`)
      .then((response) => dispatch(setOffer(response.data)))
      .catch(({ code, message, response }: AxiosError) => {
        const error: ErrorInfo = {
          code: code,
          message: message,
          status: response?.status
        };

        dispatch(setError(error));
      });
  }
);


export const fetchNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loadOffer',
  async (id, { dispatch, extra: api }) => {
    await api.get<ShortOffers>(`${APIRoute.Offers}/${id}/nearby`)
      .then((response) => dispatch(setNearbyOffers(response.data)))
      .catch(({ code, message, response }: AxiosError) => {
        const error: ErrorInfo = {
          code: code,
          message: message,
          status: response?.status
        };

        dispatch(setError(error));
      });
  }
);
