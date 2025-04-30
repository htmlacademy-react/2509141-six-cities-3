import { createReducer } from '@reduxjs/toolkit';
import { CityName, DEFAULT_CITY } from 'const';
import { setOffer, setOffers, selectCity, setError, setOffersLoadingStatus, setNearbyOffers } from './action';
import { FullOffer, ShortOffers } from 'types/offer';
import { ErrorInfo } from 'types/state';


type InitialState = {
  city: CityName;
  shortOffers: ShortOffers;
  nearbyOffers: ShortOffers;
  fullOffer?: FullOffer;
  isOffersLoading: boolean;
  error?: ErrorInfo;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  shortOffers: [],
  nearbyOffers: [],
  isOffersLoading: false,
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});


export { reducer };
