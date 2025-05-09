import PlacesList from 'components/places-list/places-list';
import HeaderNav from 'components/header-nav/header-nav';
import CityList from 'components/city-list/city-list';
import Map from 'components/map/map';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'hooks';
import { CityName, DEFAULT_CITY, CityLocations, MapSource } from 'const';
import { ShortOffer } from 'types/offer';
import { findOffersInCity } from 'utils/util';


// TODO: вынести header из Main, Favorites и Offer в компонент
function Main() {
  const [searchParams, setSearchParams] = useSearchParams();

  const cityParam = searchParams.get('city') ?? DEFAULT_CITY;
  const activeCity = CityName[cityParam as keyof typeof CityName];
  const offers = useAppSelector((state) => state.shortOffers);


  const [selectedOffer, setSelectedOffer] = useState<ShortOffer | undefined>(undefined);

  const [activeOffers, setActiveOffers] = useState(findOffersInCity(offers, DEFAULT_CITY));

  const [placesCount, setPlacesCount] = useState(activeOffers.length);

  // ❔ Насколько правильно устанавливать первоначальный query-параметр в useEffect?
  useEffect(() => {
    setSearchParams({ city: DEFAULT_CITY });
  }, []); // ❔ eslint требует убрать массив или добавить в него setSearchParams. Оба варианта не работают.


  const handleListItemHover = (offer: ShortOffer) => {
    setSelectedOffer(offer);
  };

  const handleCityClick = (name: CityName) => {
    setSearchParams({ city: name });

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
            <HeaderNav />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList activeCity={activeCity} onClick={handleCityClick} />
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
              {<PlacesList offers={activeOffers} onListItemHover={handleListItemHover} />}
            </section>
            <div className="cities__right-section">
              <Map source={MapSource.Main} location={CityLocations[activeCity]} offers={activeOffers} selectedOffer={selectedOffer} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


export default Main;
