import { AxiosError, AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, ErrorInfo, State } from '../types/state.js';
import { setOffer, loadOffers, setError, setOffersLoadingStatus } from './action';
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

    dispatch(loadOffers(data));
  },
);


export const fetchOfferAction = createAsyncThunk<void, string | undefined, {
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
