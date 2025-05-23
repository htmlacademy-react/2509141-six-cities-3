import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { getLoadingStatus, getOffers } from 'store/slices/offer-slice/selectors';
import { CityName, DEFAULT_CITY, CityLocations, MapSource } from 'const';
import { findOffersInCity } from 'utils/util';
import { ShortOffer } from 'types/offer';
import { useAppSelector } from 'hooks';
import { MemoPlacesList } from 'components/places-list/places-list';
import { MemoHeaderNav } from 'components/header-nav/header-nav';
import { MemoCityList } from 'components/city-list/city-list';
import { MemoSorting } from 'components/sorting/sorting';
import Loading from 'pages/loading/loading';
import Map from 'components/map/map';


function Main() {
  const [searchParams] = useSearchParams();
  const cityParam = searchParams.get('city') ?? DEFAULT_CITY;
  const activeCity = CityName[cityParam as keyof typeof CityName];


  const offers = useAppSelector(getOffers);
  const [activeOffers, setActiveOffers] = useState(findOffersInCity(offers, DEFAULT_CITY));

  const [selectedOffer, setSelectedOffer] = useState<ShortOffer | undefined>(undefined);


  useEffect(() => {
    const foundOffers = findOffersInCity(offers, activeCity);
    setActiveOffers(foundOffers);
  }, [activeCity, offers]);


  const handleListItemHover = useCallback(
    (offer: ShortOffer) => setSelectedOffer(offer),
    []
  );


  const isLoading = useAppSelector(getLoadingStatus);
  return (isLoading)
    ? <Loading />
    : (
      <div className="page page--gray page--main">
        <MemoHeaderNav />

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <MemoCityList activeCity={activeCity} />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{activeOffers.length} places to stay in {activeCity}</b>
                <MemoSorting />
                <MemoPlacesList offers={activeOffers} onListItemHover={handleListItemHover} />
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
