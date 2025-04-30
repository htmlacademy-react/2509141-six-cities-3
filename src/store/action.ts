import { createAction } from '@reduxjs/toolkit';
import { CityName } from 'const';
import { FullOffer, ShortOffers } from 'types/offer';
import { ErrorInfo } from 'types/state';


export const selectCity = createAction<{city: CityName}>('selectCity');

export const loadOffers = createAction<ShortOffers>('loadOffers');

export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');

export const setOffer = createAction<FullOffer | undefined>('loadOffer');

export const setError = createAction<ErrorInfo | undefined>('setError');

