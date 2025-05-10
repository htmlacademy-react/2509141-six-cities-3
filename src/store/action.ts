import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from 'const';
import { FullOffer, ShortOffers } from 'types/offer';
import { Reviews } from 'types/review';
import { ErrorInfo } from 'types/state';


// Д19. Для именования типов действия (action type) применяется паттерн: домен/действие (something/action).
// Например: list/addFavorite, user/login и так далее
// ❔ Как определить домен?
export const setOffers = createAction<ShortOffers>('offers/setOffers');
export const setFavoriteOffers = createAction<ShortOffers>('offers/setFavoriteOffers');
export const toggleFavoriteStatus = createAction<string>('offers/toggleFavoriteStatus');

export const setOffer = createAction<FullOffer | undefined>('offer/setOffer');
export const setReviews = createAction<Reviews>('offer/setReviews');
export const setNearbyOffers = createAction<ShortOffers>('offer/setNearbyOffers');

export const setOffersLoadingStatus = createAction<boolean>('loading/setOffersLoadingStatus');
export const setError = createAction<ErrorInfo | undefined>('loading/setError');

export const redirectToRoute = createAction<AppRoute>('navigation/redirectToRoute');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setEmail = createAction<string | undefined>('user/setEmail');

