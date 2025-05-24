import { AxiosError, AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setOffer, setOffers, setError, setOffersLoadingStatus, setNearbyOffers, setReviews, requireAuthorization, setEmail, setFavoriteOffers, toggleFavoriteStatus, redirectToRoute, setReviewStatus } from './action';
import { AppDispatch, ErrorInfo, State } from 'types/state.js';
import { FullOffer, ShortOffers } from 'types/offer.js';
import { APIRoute, AppRoute, AuthorizationStatus } from 'const';
import { BaseReviewInfo, Reviews, ReviewSendingStatus } from 'types/review.js';
import { saveToken, dropToken } from 'services/token';
import { AuthData } from 'types/auth-data';
import { UserData } from 'types/user-data';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
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


export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    await api.get<ShortOffers>(`${APIRoute.Favorites}`)
      .then((response) => dispatch(setFavoriteOffers(response.data)));
  },
);


export const toggleFavoriteStatusAction = createAsyncThunk<void, { id: string; isFavorite: boolean }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/toggleFavoriteStatus',
  async ({ id, isFavorite }, { dispatch, getState, extra: api }) => {
    const state = getState();
    const authorizationStatus = state.authorizationStatus;

    if (authorizationStatus === AuthorizationStatus.Auth) {
      const path = isFavorite ? 0 : 1;
      await api.post<ShortOffers>(`${APIRoute.Favorites}/${id}/${path}`)
        .then(() => dispatch(toggleFavoriteStatus(id)));
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  }
);


export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
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
  'data/fetchNearbyOffers',
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
  'data/fetchReviews',
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


export const addReviewAction = createAsyncThunk<void, BaseReviewInfo, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addReview',
  async (review, { dispatch, getState, extra: api }) => {
    const id = getState().fullOffer?.id;

    if (!id) {
      return;
    }

    dispatch(setReviewStatus(ReviewSendingStatus.sending));

    await api.post<BaseReviewInfo>(`${APIRoute.Reviews}/${id}`, review)
      .then(() => {
        dispatch(fetchReviewsAction(id));
        dispatch(setReviewStatus(ReviewSendingStatus.sent));
      })
      .catch(() =>
        dispatch(setReviewStatus(ReviewSendingStatus.error)));
  }
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data: { email } } = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setEmail(email));
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
    dispatch(setEmail(email));

    dispatch(fetchOffersAction());
    dispatch(fetchFavoritesAction());

    dispatch(redirectToRoute(AppRoute.Root));
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
    dispatch(setEmail(undefined));

    dispatch(fetchOffersAction());
    dispatch(setFavoriteOffers([]));
  },
);
