import { Link } from 'react-router-dom';
import { AppRoute } from 'const';
import { useAppSelector } from 'hooks';
import { getFavoriteOffers } from 'store/slices/offer-slice/selectors';
import { MemoHeaderNav } from 'components/header-nav/header-nav';
import FavoritePlacesList from 'components/favorites/favorite-places-list/favorite-places-list';
import FavoritesEmpty from 'components/favorites/favorites-empty/favorites-empty';


function Favorites() {
  const offers = useAppSelector(getFavoriteOffers);

  return(
    <div className="page">
      <MemoHeaderNav />
      {
        offers.length > 0
          ? <FavoritePlacesList offers={offers} />
          : <FavoritesEmpty />
      }
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Root}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}


export default Favorites;
