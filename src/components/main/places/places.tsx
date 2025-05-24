import { useState, useCallback } from 'react';
import { ShortOffer, ShortOffers } from 'types/offer';
import { CityLocations, CityName, MapSource } from 'const';
import { MemoPlacesList } from 'components/places-list/places-list';
import { MemoSorting } from 'components/sorting/sorting';
import Map from 'components/map/map';


type PlacesProps = {
  city: CityName;
  offers: ShortOffers;
}

function Places({ city, offers }: PlacesProps) {
  const [selectedOffer, setSelectedOffer] = useState<ShortOffer | undefined>(undefined);


  const handleListItemHover = useCallback(
    (offer: ShortOffer) => setSelectedOffer(offer),
    []
  );


  return (
    <div className="cities__places-container container">

      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {city}</b>
        <MemoSorting />
        <MemoPlacesList offers={offers} onListItemHover={handleListItemHover} />
      </section>

      <div className="cities__right-section">
        <Map source={MapSource.Main} location={CityLocations[city]} offers={offers} selectedOffer={selectedOffer} />
      </div>
    </div>
  );
}


export default Places;

