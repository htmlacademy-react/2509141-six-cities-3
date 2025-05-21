import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { AppRoute, AuthorizationStatus } from 'const';
import { useAppSelector } from 'hooks';
import { getAuthStatus } from 'store/slices/user-slice/selectors';


function PrivateRoute({ children }: PropsWithChildren) {
  const authorizationStatus = useAppSelector(getAuthStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}


export default PrivateRoute;
