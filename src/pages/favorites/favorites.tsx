import { Link } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import { getFavoriteOffers } from 'store/slices/offer-slice/selectors';
import FavoritePlacesList from 'components/favorite-places-list/favorite-places-list';
import FavoritesEmpty from 'components/favorites-empty/favorites-empty';
import HeaderNav from 'components/header-nav/header-nav';


function Favorites() {
  const offers = useAppSelector(getFavoriteOffers);

  return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <HeaderNav />
          </div>
        </div>
      </header>

      {
        offers.length > 0
          ? <FavoritePlacesList offers={offers} />
          : <FavoritesEmpty />
      }
      <footer className="footer container">
        <Link className="footer__logo-link" to='/'>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}


export default Favorites;
