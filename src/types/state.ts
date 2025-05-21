import { Reviews, ReviewSendingStatus } from './review';
import { AuthorizationStatus, SortType } from 'const';
import { ShortOffers, FullOffer } from './offer';
import { store } from 'store/index';


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
  reviews: Reviews;
  reviewStatus: ReviewSendingStatus;
  isOffersLoading: boolean;
  favoriteOffers: ShortOffers;
  hasError: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ErrorInfo = {
  code?: string;
  message: string;
  status?: number;
};
