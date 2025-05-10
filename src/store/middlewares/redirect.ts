import browserHistory from 'browser-history';
import { PayloadAction } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { reducer } from 'store/reducer';


type Reducer = ReturnType<typeof reducer>;


export const redirect: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'navigation/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
