import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchOfferAction, fetchOffersAction } from 'store/api-actions';
import { FullOffer, ShortOffers } from 'types/offer';
import { OfferSlice } from 'types/state';
import { findOffer } from 'utils/util';
import { sortToTop, sortToHighPrice, sortToLowPrice } from 'utils/sort';
import { NameSpace, SortType } from 'const';


const initialState: OfferSlice = {
  shortOffers: [],
  sortedOffers: [],
  sortType: SortType.Popular,
  nearbyOffers: [],
  favoriteOffers: [],
  isOffersLoading: false,
  hasError: false
};

export const offerSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setNearbyOffers: (state, action: PayloadAction<ShortOffers>) => {
      state.nearbyOffers = action.payload;
    },
    setFavoriteOffers: (state, action: PayloadAction<ShortOffers>) => {
      state.favoriteOffers = action.payload;
    },
    toggleFavoriteStatus: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const offer = findOffer(state.sortedOffers, id);

      if (offer === undefined) {
        return;
      }

      state.favoriteOffers = offer.isFavorite
        ? state.favoriteOffers.filter((favorite) => favorite.id !== id)
        : [...state.favoriteOffers, offer];


      if (state.fullOffer) {
        state.fullOffer.isFavorite = !offer.isFavorite;
      }

      offer.isFavorite = !offer.isFavorite;
    },
    setOffer: (state, action: PayloadAction<FullOffer | undefined>) => {
      state.fullOffer = action.payload;
    },
    setSortType: (state, action: PayloadAction<SortType>) => {
      const sortType = action.payload;

      if (sortType === state.sortType) {
        return;
      }

      state.sortType = sortType;

      switch (sortType) {
        case SortType.Top:
          state.sortedOffers.sort(sortToTop);
          break;
        case SortType.ToHighPrice:
          state.sortedOffers.sort(sortToHighPrice);
          break;
        case SortType.ToLowPrice:
          state.sortedOffers.sort(sortToLowPrice);
          break;
        default:
          state.sortedOffers = state.shortOffers;
          break;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.shortOffers = state.sortedOffers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.hasError = true;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOffersLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.fullOffer = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.hasError = true;
      });
  }
});

export const { setNearbyOffers, setFavoriteOffers, toggleFavoriteStatus, setOffer, setSortType } = offerSlice.actions;
