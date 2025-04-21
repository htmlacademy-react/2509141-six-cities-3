import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from 'const';
import { fullOffers } from 'mocks/fullOffers';
import { shortOffers } from 'mocks/shortOffers';
import { selectCity } from './action';


const initialState = {
  city: DEFAULT_CITY,
  shortOffers: shortOffers,
  fullOffers: fullOffers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(selectCity, (state, action) => {
      const {city} = action.payload;

      state.city = city;
    });
});


export { reducer };
