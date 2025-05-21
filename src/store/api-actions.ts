import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setNearbyOffers, setReviews, setFavoriteOffers, toggleFavoriteStatus, setReviewStatus } from 'store/slices/offer-slice/offer-slice';
import { BaseReviewInfo, Reviews, ReviewSendingStatus } from 'types/review.js';
import { APIRoute, AppRoute, AuthorizationStatus, NameSpace } from 'const';
import { FullOffer, ShortOffers } from 'types/offer.js';
import { AppDispatch, State } from 'types/state.js';
import { AuthData } from 'types/auth-data';
import { UserData } from 'types/user-data';
import { redirectToRoute } from './action';
import { saveToken, dropToken } from 'services/token';


export const fetchOffersAction = createAsyncThunk<ShortOffers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<ShortOffers>(APIRoute.Offers);
    return data;
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
    const authorizationStatus = state[NameSpace.User].authorizationStatus;

    if (authorizationStatus === AuthorizationStatus.Auth) {
      const path = isFavorite ? 0 : 1;
      await api.post<ShortOffers>(`${APIRoute.Favorites}/${id}/${path}`)
        .then(() => dispatch(toggleFavoriteStatus(id)));
    } else {
      dispatch(redirectToRoute(AppRoute.Login));
    }
  }
);


export const fetchOfferAction = createAsyncThunk<FullOffer, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchOffer',
  async (id, { extra: api }) => {
    const { data } = await api.get<FullOffer>(`${APIRoute.Offers}/${id}`);
    return data;
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
      .then((response) => dispatch(setNearbyOffers(response.data)));
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
      .then((response) => dispatch(setReviews(response.data)));
  }
);


export const addReviewAction = createAsyncThunk<void, BaseReviewInfo, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addReview',
  async (review, { dispatch, getState, extra: api }) => {
    const id = getState()[NameSpace.Offer].fullOffer?.id;

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


export const checkAuthAction = createAsyncThunk<string, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data: { email } } = await api.get<UserData>(APIRoute.Login);

    return email;
  },
);


export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });

    saveToken(token);

    dispatch(fetchOffersAction());
    dispatch(fetchFavoritesAction());

    dispatch(redirectToRoute(AppRoute.Root));

    return email;
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

    dispatch(fetchOffersAction());
    dispatch(setFavoriteOffers([]));
  },
);
