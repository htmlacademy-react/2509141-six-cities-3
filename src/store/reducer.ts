import { createReducer } from '@reduxjs/toolkit';
import { setOffer, setOffers, selectCity, setError, setOffersLoadingStatus, setNearbyOffers, setReviews, requireAuthorization } from './action';
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
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  shortOffers: [],
  nearbyOffers: [],
  reviews: [],
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

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
    });
});


export { reducer };
