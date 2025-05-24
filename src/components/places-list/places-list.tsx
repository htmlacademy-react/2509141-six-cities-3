import { memo } from 'react';
import { PlaceCardSource } from 'const';
import { ShortOffer, ShortOffers } from 'types/offer';
import PlaceCard from './place-card/place-card';


type PlacesListProps = {
  offers?: ShortOffers;
  onListItemHover: (offer: ShortOffer) => void;
}

function PlacesList({ offers, onListItemHover }: PlacesListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers?.map((offer) => (
        <PlaceCard
          offer={offer}
          source={PlaceCardSource.Main}
          key={offer.id}
          onListItemHover={onListItemHover}
        />))}
    </div>
  );
}


export const MemoPlacesList = memo(PlacesList);
