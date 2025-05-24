import { Reviews } from 'types/review';
import { State } from 'types/state';
import { NameSpace } from 'const';


export const getReviews = (state: State): Reviews => state[NameSpace.Review].reviews;
export const getSendingStatus = (state: State): boolean => state[NameSpace.Review].isSending;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Review].hasError;
