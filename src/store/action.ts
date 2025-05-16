import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from 'const';
import { FullOffer, ShortOffers } from 'types/offer';
import { Reviews, ReviewSendingStatus } from 'types/review';
import { ErrorInfo } from 'types/state';


export const setOffer = createAction<FullOffer | undefined>('offer/setOffer');
export const setOffers = createAction<ShortOffers>('offer/setOffers');
export const setNearbyOffers = createAction<ShortOffers>('offer/setNearbyOffers');
export const setFavoriteOffers = createAction<ShortOffers>('offer/setFavoriteOffers');
export const toggleFavoriteStatus = createAction<string>('offer/toggleFavoriteStatus');
export const setOffersLoadingStatus = createAction<boolean>('offer/setLoadingStatus');


export const setReviews = createAction<Reviews>('review/setReviews');
export const setReviewStatus = createAction<ReviewSendingStatus>('review/setReviewStatus');

export const setError = createAction<ErrorInfo | undefined>('app/setError');
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setEmail = createAction<string | undefined>('user/setEmail');

