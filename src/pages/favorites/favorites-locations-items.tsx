import PlaceCard from 'components/place-card/place-card';
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
          <a className="locations__item-link" href="#">
            <span>{currentLocation}</span>
          </a>
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
