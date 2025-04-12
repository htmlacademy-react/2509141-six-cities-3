import CityLink from 'components/city-link/city-link';
import PlacesList from 'components/places-list/places-list';
import { Link } from 'react-router-dom';
import { ShortOffer, ShortOffers } from 'types/offer';
import { AppRoute, CityName, DEFAULT_CITY, MapType } from 'const';
import Map from 'components/map/map';
import { useState } from 'react';
import { CityLocations } from 'mocks/cities';
import { findOffersInCity } from 'utils/util';


type MainProps = {
  offers: ShortOffers;
}

// TODO: вынести header из Main, Favorites и Offer в компонент
function Main({offers}: MainProps) {
  const [selectedOffer, setSelectedOffer] = useState<ShortOffer | undefined>(undefined);

  const [activeOffers, setActiveOffers] = useState(findOffersInCity(offers, DEFAULT_CITY));
  const [placesCount, setPlacesCount] = useState(activeOffers.length);
  const [activeCity, setActiveCity] = useState<CityName>(DEFAULT_CITY);


  const handleListItemHover = (offer: ShortOffer) => {
    setSelectedOffer(offer);
  };

  const handleCityClick = (name: CityName) => {
    setActiveCity(name);

    const foundOffers = findOffersInCity(offers, name);
    setActiveOffers(foundOffers);

    setPlacesCount(foundOffers.length);
  };


  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {Object.values(CityName).map((name) => <CityLink name={name} activeCity={activeCity} key={name} onClick={handleCityClick} />)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in {activeCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              {/* ❔ Теперь при смене города остаются артефакты. Кто виноват и что делать? */}
              {<PlacesList offers={activeOffers} onListItemHover={handleListItemHover} />}
            </section>
            <div className="cities__right-section">
              <Map type={MapType.Main} location={CityLocations[activeCity]} offers={activeOffers} selectedOffer={selectedOffer} />
              {/* <section className="cities__map map"></section> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default Main;
