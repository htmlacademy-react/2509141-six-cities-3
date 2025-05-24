import { AuthorizationStatus, NameSpace } from 'const';
import { State } from 'types/state';


export const getAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getEmail = (state: State): string | undefined => state[NameSpace.User].email;
