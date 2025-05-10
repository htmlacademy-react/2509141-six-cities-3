import PlaceCard from 'components/place-card/place-card';
import { Link } from 'react-router-dom';
import { CityName, PlaceCardSource } from 'const';
import { ShortOffers } from 'types/offer';


type FavoritesLocationsItemsProps = {
  offers: ShortOffers;
  currentLocation: CityName;
}

function FavoritesLocationsItems({offers, currentLocation}: FavoritesLocationsItemsProps) {
  const currentLocationOffers = offers.filter((offer) => offer.city.name === currentLocation);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          {/* ❔ Допустимо вручную устанавливать query-параметр, вне setSearchParams()? */}
          <Link className="locations__item-link" to={`/?city=${currentLocation}`}>
            <span>{currentLocation}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {currentLocationOffers.map((offer) => (
          <PlaceCard
            offer={offer}
            source={PlaceCardSource.Favorites}
            key={offer.id}
          />
        ))}
      </div>
    </li>
  );
}


export default FavoritesLocationsItems;
