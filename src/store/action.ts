import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from 'const';


// ❔ В демо-проекте это единственный action, созданный вне slice. Почему?
export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
