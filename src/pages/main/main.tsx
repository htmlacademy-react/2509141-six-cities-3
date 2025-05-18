import PlacesList from 'components/places-list/places-list';
import HeaderNav from 'components/header-nav/header-nav';
import CityList from 'components/city-list/city-list';
import Sorting from 'components/sorting/sorting';
import Map from 'components/map/map';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'hooks';
import { CityName, DEFAULT_CITY, CityLocations, MapSource } from 'const';
import { ShortOffer } from 'types/offer';
import { findOffersInCity } from 'utils/util';


// TODO: вынести header из Main, Favorites и Offer в компонент
function Main() {
  const [searchParams] = useSearchParams();
  const cityParam = searchParams.get('city') ?? DEFAULT_CITY;
  const activeCity = CityName[cityParam as keyof typeof CityName];


  const offers = useAppSelector((state) => state.sortedOffers);
  const [activeOffers, setActiveOffers] = useState(findOffersInCity(offers, DEFAULT_CITY));

  const [selectedOffer, setSelectedOffer] = useState<ShortOffer | undefined>(undefined);


  useEffect(() => {
    const foundOffers = findOffersInCity(offers, activeCity);
    setActiveOffers(foundOffers);
  }, [activeCity, offers]);


  const handleListItemHover = (offer: ShortOffer) =>
    setSelectedOffer(offer);


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
        <CityList activeCity={activeCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeOffers.length} places to stay in {activeCity}</b>
              <Sorting />
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
