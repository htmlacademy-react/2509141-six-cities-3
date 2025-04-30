import { createReducer } from '@reduxjs/toolkit';
import { CityName, DEFAULT_CITY } from 'const';
import { setOffer, loadOffers, selectCity, setError, setOffersLoadingStatus } from './action';
import { FullOffer, ShortOffers } from 'types/offer';
import { ErrorInfo } from 'types/state';


type InitialState = {
  city: CityName;
  shortOffers: ShortOffers;
  fullOffer?: FullOffer;
  isOffersLoading: boolean;
  error?: ErrorInfo;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  shortOffers: [],
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
    .addCase(loadOffers, (state, action) => {
      state.shortOffers = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.fullOffer = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});


export { reducer };
