import { store } from 'store/index';
import { AuthorizationStatus, SortType } from 'const';
import { ShortOffers, FullOffer } from './offer';
import { Reviews } from './review';


export type AppSlice = {
  hasError: boolean;
};

export type UserSlice = {
  authorizationStatus: AuthorizationStatus;
  email?: string;
};

export type OfferSlice = {
  shortOffers: ShortOffers;
  sortedOffers: ShortOffers;
  sortType: SortType;
  nearbyOffers: ShortOffers;
  fullOffer?: FullOffer;
  isOffersLoading: boolean;
  favoriteOffers: ShortOffers;
  hasError: boolean;
};

export type ReviewSlice = {
  isSending: boolean;
  reviews: Reviews;
  hasError: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ErrorInfo = {
  code?: string;
  message: string;
  status?: number;
};
