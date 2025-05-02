import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName } from 'const';
import { FullOffer, ShortOffers } from 'types/offer';
import { Reviews } from 'types/review';
import { ErrorInfo } from 'types/state';


export const selectCity = createAction<{city: CityName}>('selectCity');

export const setOffers = createAction<ShortOffers>('setOffers');
export const setNearbyOffers = createAction<ShortOffers>('setNearbyOffers');

export const setOffer = createAction<FullOffer | undefined>('setOffer');
export const setReviews = createAction<Reviews>('setReviews');

export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
export const setError = createAction<ErrorInfo | undefined>('setError');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
