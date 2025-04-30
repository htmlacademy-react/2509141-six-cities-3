import { AxiosError, AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setOffer, setOffers, setError, setOffersLoadingStatus, setNearbyOffers, setReviews } from './action';
import { AppDispatch, ErrorInfo, State } from 'types/state.js';
import { FullOffer, ShortOffers } from 'types/offer.js';
import { APIRoute } from 'const';
import { Reviews } from 'types/review.js';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loadOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersLoadingStatus(true));

    await api.get<ShortOffers>(APIRoute.Offers)
      .then((response) => dispatch(setOffers(response.data)))
      .catch(({ code, message, response }: AxiosError) => {
        const error: ErrorInfo = {
          code: code,
          message: message,
          status: response?.status
        };

        dispatch(setError(error));
      });

    dispatch(setOffersLoadingStatus(false));
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
  'loadNearbyOffers',
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


export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loadReviews',
  async (id, { dispatch, extra: api }) => {
    await api.get<Reviews>(`${APIRoute.Reviews}/${id}`)
      .then((response) => dispatch(setReviews(response.data)))
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
