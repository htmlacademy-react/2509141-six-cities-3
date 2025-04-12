import PlaceCard from 'components/place-card/place-card';
import { MAX_NEAR_PLACES_COUNT, PlaceCardSource } from 'const';
import { ShortOffers } from 'types/offer';


type NearPlacesProps = {
  offers: ShortOffers;
}

function NearPlaces({offers}: NearPlacesProps) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.slice(0, MAX_NEAR_PLACES_COUNT).map((offer) => <PlaceCard offer={offer} source={PlaceCardSource.NearPlaces} key={offer.id} />)}
        </div>
      </section>
    </div>
  );
}


export default NearPlaces;
