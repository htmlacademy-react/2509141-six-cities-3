import { Route, Routes } from 'react-router-dom';
import { AppRoute } from 'const';
import Main from 'pages/main/main';
import Login from 'pages/login/login';
import Favorites from 'pages/favorites/favorites';
import NotFound from 'pages/not-found/not-found';
import Offer from 'pages/offer/offer';
import PrivateRoute from 'components/private-route/private-route';
import browserHistory from 'browser-history';
import HistoryRouter from 'components/history-route/history-route';


function App() {
  return (
    // TODO: HelmetProvider
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main />}
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
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}


export default App;
