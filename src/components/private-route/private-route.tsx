import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { AppRoute, AuthorizationStatus } from 'const';
import { useAppSelector } from 'hooks';


// ❔ Как правильно оформлять детей, если кроме них ничего нет?
type PrivateRouteProps = PropsWithChildren;

function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}


export default PrivateRoute;
