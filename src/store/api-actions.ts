import { AxiosError, AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setOffer, setOffers, setError, setOffersLoadingStatus, setNearbyOffers, setReviews, requireAuthorization } from './action';
import { AppDispatch, ErrorInfo, State } from 'types/state.js';
import { FullOffer, ShortOffers } from 'types/offer.js';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from 'const';
import { Reviews } from 'types/review.js';
import { saveToken, dropToken } from 'services/token';
import { AuthData } from 'types/auth-data';
import { UserData } from 'types/user-data';
import { store } from 'store';


export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(undefined)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


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

// ❔ Какой вариант предпочтительнее -- .then.catch или try {} catch {}
export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (err) {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);


export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);


export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
