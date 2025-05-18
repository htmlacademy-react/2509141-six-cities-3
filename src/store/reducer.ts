import { createReducer } from '@reduxjs/toolkit';
import { setOffer, setOffers, setError, setOffersLoadingStatus, setNearbyOffers, setReviews, requireAuthorization, setEmail, setFavoriteOffers, toggleFavoriteStatus, setReviewStatus, setSortType } from './action';
import { SortToHighPrice, SortToLowPrice, SortToTop } from 'utils/sort';
import { findOffer } from 'utils/util';
import { AuthorizationStatus, SortType } from 'const';
import { Reviews, ReviewSendingStatus } from 'types/review';
import { FullOffer, ShortOffers } from 'types/offer';
import { ErrorInfo } from 'types/state';


type InitialState = {
  shortOffers: ShortOffers;
  sortedOffers: ShortOffers;
  sortType: SortType;
  nearbyOffers: ShortOffers;
  fullOffer?: FullOffer;
  reviews: Reviews;
  reviewStatus: ReviewSendingStatus;
  isOffersLoading: boolean;
  error?: ErrorInfo;
  authorizationStatus: AuthorizationStatus;
  email?: string;
  favoriteOffers: ShortOffers;
}

const initialState: InitialState = {
  shortOffers: [],
  sortedOffers: [],
  sortType: SortType.Popular,
  nearbyOffers: [],
  favoriteOffers: [],
  reviews: [],
  reviewStatus: ReviewSendingStatus.none,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown
};


// TODO: Д17. Отсутствует «универсальный редьюсер». Редьюсеры разбиваются в соответствии с предметной областью и объединяются при помощи Combine Reducer
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.shortOffers = state.sortedOffers = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setFavoriteOffers, (state, action) => {
      state.favoriteOffers = action.payload;
    })
    .addCase(toggleFavoriteStatus, (state, action) => {
      const id = action.payload;
      const offer = findOffer(state.shortOffers, id);

      if (offer === undefined) {
        return;
      }

      state.favoriteOffers = offer.isFavorite
        ? state.favoriteOffers.filter((favorite) => favorite.id !== id)
        : [...state.favoriteOffers, offer];

      offer.isFavorite = !offer.isFavorite;
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
    .addCase(setReviewStatus, (state, action) => {
      state.reviewStatus = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      const sortType = action.payload;

      if (sortType === state.sortType) {
        return;
      }

      state.sortType = sortType;

      switch (sortType) {
        case SortType.Top:
          state.sortedOffers.sort(SortToTop);
          break;
        case SortType.ToHighPrice:
          state.sortedOffers.sort(SortToHighPrice);
          break;
        case SortType.ToLowPrice:
          state.sortedOffers.sort(SortToLowPrice);
          break;
        default:
          state.sortedOffers = state.shortOffers;
          break;
      }
    });
});


export { reducer };
