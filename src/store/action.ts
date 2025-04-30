import { createAction } from '@reduxjs/toolkit';
import { CityName } from 'const';
import { FullOffer, ShortOffers } from 'types/offer';
import { ErrorInfo } from 'types/state';


export const selectCity = createAction<{city: CityName}>('selectCity');

export const setOffers = createAction<ShortOffers>('setOffers');
export const setNearbyOffers = createAction<ShortOffers>('setNearbyOffers');

export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');

export const setOffer = createAction<FullOffer | undefined>('setOffer');

export const setError = createAction<ErrorInfo | undefined>('setError');

