import { createAction } from '@reduxjs/toolkit';
import { CityName } from 'const';


export const selectCity = createAction<{city: CityName}>('selectCity');
