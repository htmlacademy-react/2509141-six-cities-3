import { createReducer } from '@reduxjs/toolkit';
import { setOffer, setOffers, selectCity, setError, setOffersLoadingStatus, setNearbyOffers, setReviews, requireAuthorization, setEmail, setFavoriteOffers } from './action';
import { CityName, DEFAULT_CITY, AuthorizationStatus } from 'const';
import { FullOffer, ShortOffers } from 'types/offer';
import { ErrorInfo } from 'types/state';
import { Reviews } from 'types/review';


type InitialState = {
  city: CityName;
  shortOffers: ShortOffers;
  nearbyOffers: ShortOffers;
  fullOffer?: FullOffer;
  reviews: Reviews;
  isOffersLoading: boolean;
  error?: ErrorInfo;
  authorizationStatus: AuthorizationStatus;
  email?: string;
  favoriteOffers: ShortOffers;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  shortOffers: [],
  nearbyOffers: [],
  favoriteOffers: [],
  reviews: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};


// TODO: Д17. Отсутствует «универсальный редьюсер». Редьюсеры разбиваются в соответствии с предметной областью и объединяются при помощи Combine Reducer
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      const {city} = action.payload;

      state.city = city;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.shortOffers = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.fullOffer = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setEmail, (state, action) => {
      state.email = action.payload;
    });
});


export { reducer };
