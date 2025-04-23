import { createAction } from '@reduxjs/toolkit';
import { CityName } from 'const';
import { ShortOffers } from 'types/offer';


export const selectCity = createAction<{city: CityName}>('selectCity');

export const loadOffers = createAction<ShortOffers>('loadOffers');

export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
