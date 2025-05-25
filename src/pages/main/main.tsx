import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getLoadingStatus, getOffers } from 'store/slices/offer-slice/selectors';
import { CityName, DEFAULT_CITY } from 'const';
import { findOffersInCity } from 'utils/util';
import { useAppSelector } from 'hooks';
import { MemoHeaderNav } from 'components/header-nav/header-nav';
import CityList from 'components/city-list/city-list';
import Loading from 'pages/loading/loading';
import Places from 'components/main/places/places';
import NoPlaces from 'components/main/no-places/no-places';


function Main() {
  const [searchParams] = useSearchParams();
  const cityParam = searchParams.get('city') ?? DEFAULT_CITY;
  const city = CityName[cityParam as keyof typeof CityName];


  const offers = useAppSelector(getOffers);
  const [activeOffers, setActiveOffers] = useState(findOffersInCity(offers, DEFAULT_CITY));

  const isEmpty = activeOffers.length === 0;
  const emptyClass = isEmpty ? 'page__main--index-empty' : '';


  useEffect(() => {
    const foundOffers = findOffersInCity(offers, city);
    setActiveOffers(foundOffers);
  }, [city, offers]);


  const isLoading = useAppSelector(getLoadingStatus);
  return (isLoading)
    ? <Loading />
    : (
      <div className="page page--gray page--main">
        <Helmet>
          <title>{city}</title>
        </Helmet>

        <MemoHeaderNav />

        <main className={`page__main page__main--index ${emptyClass}`}>
          <h1 className="visually-hidden">Cities</h1>
          <CityList activeCity={city} />

          <div className="cities">
            {
              isEmpty
                ? <NoPlaces city={city} />
                : <Places city={city} offers={activeOffers} />
            }
          </div>
        </main>
      </div>
    );
}


export default Main;
