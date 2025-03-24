import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from 'const';
import Main from 'pages/main/main';
import Login from 'pages/login/login';
import Favorites from 'pages/favorites/favorites';
import NotFound from 'pages/not-found/not-found';
import Offer from 'pages/offer/offer';
import PrivateRoute from 'components/private-route/private-route';
import { ShortOffers } from 'types/offer';


type AppProps = {
  placesCount: number;
  offers: ShortOffers;
}

function App({placesCount, offers}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main placesCount={placesCount} offers={offers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route path={AppRoute.Offer}>
          <Route path=':id' element={<Offer />} />
        </Route>
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers} />
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
