import PlaceCard from 'components/place-card/place-card';
import { ShortOffers } from 'types/offer';
import { useState } from 'react';
import { PlaceCardSource } from 'const';


type PlacesListProps = {
  offers: ShortOffers;
}

function PlacesList({offers}: PlacesListProps) {
  const [activeCardId, setActiveCardId] = useState(offers[0].id);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          source={PlaceCardSource.Main}
          key={offer.id}
          onMouseEnter={() => {
            setActiveCardId(offer.id);
            // eslint-disable-next-line no-console
            console.log(activeCardId);
          }}
        />))}
    </div>
  );
}


export default PlacesList;
