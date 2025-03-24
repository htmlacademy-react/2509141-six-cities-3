import FavoritesLocationsItems from 'pages/favorites/favorites-locations-items';
import { ShortOffers } from 'types/offer';


type FavoritePlacesListProps = {
  offers: ShortOffers;
}

function FavoritePlacesList({offers}: FavoritePlacesListProps) {
  const cities = offers.map((offer) => offer.city.name);
  const uniqueCities = [...new Set(cities)];

  return (
    <ul className="favorites__list">
      {uniqueCities.map((city) => <FavoritesLocationsItems offers={offers} currentLocation={city} key={city} />)}
    </ul>
  );
}


export default FavoritePlacesList;
