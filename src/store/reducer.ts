import { createReducer } from '@reduxjs/toolkit';
import { CityName, DEFAULT_CITY } from 'const';
import { fullOffers } from 'mocks/fullOffers';
import { loadOffers, selectCity, setOffersLoadingStatus } from './action';
import { FullOffers, ShortOffers } from 'types/offer';


type InitialState = {
  city: CityName;
  shortOffers: ShortOffers;
  fullOffers: FullOffers;
  isOffersLoading: boolean;
}

const initialState: InitialState = {
  city: DEFAULT_CITY,
  shortOffers: [],
  fullOffers: fullOffers,
  isOffersLoading: false
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
    });
});


export { reducer };
