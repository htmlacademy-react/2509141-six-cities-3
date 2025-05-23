import { ShortOffers } from 'types/offer';
import FavoritesLocationsItems from 'components/favorites/favorites-locations-items/favorites-locations-items';


type FavoritePlacesListProps = {
  offers: ShortOffers;
}

function FavoritePlacesList({offers}: FavoritePlacesListProps) {
  const cities = offers.map((offer) => offer.city.name);
  const uniqueCities = [...new Set(cities)];

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {uniqueCities.map((city) => <FavoritesLocationsItems offers={offers} currentLocation={city} key={city} />)}
          </ul>
        </section>
      </div>
    </main>
  );
}


export default FavoritePlacesList;
