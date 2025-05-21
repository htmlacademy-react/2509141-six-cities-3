import { NameSpace, SortType } from 'const';
import { State } from 'types/state';
import { FullOffer, ShortOffers } from 'types/offer';
import { Reviews, ReviewSendingStatus } from 'types/review';


export const getOffer = (state: State): FullOffer | undefined => state[NameSpace.Offer].fullOffer;
export const getOffers = (state: State): ShortOffers => state[NameSpace.Offer].sortedOffers;
export const getNearbyOffers = (state: State): ShortOffers => state[NameSpace.Offer].nearbyOffers;
export const getReviews = (state: State): Reviews => state[NameSpace.Offer].reviews;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Offer].hasError;
export const getReviewStatus = (state: State): ReviewSendingStatus => state[NameSpace.Offer].reviewStatus;
export const getFavoriteOffers = (state: State): ShortOffers => state[NameSpace.Offer].favoriteOffers;
export const getFavoriteCount = (state: State): number => state[NameSpace.Offer].favoriteOffers.length;

export const getSortType = (state: State): SortType => state[NameSpace.Offer].sortType;


export const getLoadingStatus = (state: State): boolean => state[NameSpace.Offer].isOffersLoading;
