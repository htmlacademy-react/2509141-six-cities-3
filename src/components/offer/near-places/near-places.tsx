import { ShortOffers } from 'types/offer';
import { PlaceCardSource } from 'const';
import PlaceCard from 'components/places-list/place-card/place-card';


type NearPlacesProps = {
  offers: ShortOffers;
}

function NearPlaces({ offers }: NearPlacesProps) {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) => <PlaceCard offer={offer} source={PlaceCardSource.NearPlaces} key={offer.id} />)}
        </div>
      </section>
    </div>
  );
}


export default NearPlaces;
