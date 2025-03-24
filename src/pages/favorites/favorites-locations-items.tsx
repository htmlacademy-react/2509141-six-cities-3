import PlaceCard from 'components/place-card/place-card';
import { CityName } from 'const';
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
        {/* ❔ Не лучше ли вынести в отдельную функцию? */}
        {currentLocationOffers.map((offer) => (
          <PlaceCard
            offer={offer}
            key={offer.id}
            isFavoriteView
          />
        ))}
      </div>
    </li>
  );
}


export default FavoritesLocationsItems;
