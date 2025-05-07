import { createReducer } from '@reduxjs/toolkit';
import { setOffer, setOffers, selectCity, setError, setOffersLoadingStatus, setNearbyOffers, setReviews, requireAuthorization, setEmail, setFavoriteOffers, toggleFavoriteStatus } from './action';
import { CityName, DEFAULT_CITY, AuthorizationStatus } from 'const';
import { FullOffer, ShortOffers } from 'types/offer';
import { ErrorInfo } from 'types/state';
import { Reviews } from 'types/review';
import { findOffer } from 'utils/util';


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
    // ❔ Не слишком много кода для reducer?
    .addCase(toggleFavoriteStatus, (state, action) => {
      const id = action.payload;
      const offer = findOffer(state.shortOffers, id);

      if (offer === undefined) {
        return;
      }

      offer.isFavorite = !offer.isFavorite;

      if (offer.isFavorite) {
        state.favoriteOffers = state.favoriteOffers.filter((favorite) => favorite.id !== id);
      } else {
        state.favoriteOffers.push(offer);
      }
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
