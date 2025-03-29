import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from 'const';
import { FullOffers, ShortOffers } from 'types/offer';
import Main from 'pages/main/main';
import Login from 'pages/login/login';
import Favorites from 'pages/favorites/favorites';
import NotFound from 'pages/not-found/not-found';
import Offer from 'pages/offer/offer';
import PrivateRoute from 'components/private-route/private-route';


type AppProps = {
  placesCount: number;
  shortOffers: ShortOffers;
  fullOffers: FullOffers;
}

function App({placesCount, shortOffers, fullOffers}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main placesCount={placesCount} offers={shortOffers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route path={AppRoute.Offer}>
          <Route path=':id' element={<Offer shortOffers={shortOffers} fullOffers={fullOffers} />} />
        </Route>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={shortOffers} />
            </PrivateRoute>
          }
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
