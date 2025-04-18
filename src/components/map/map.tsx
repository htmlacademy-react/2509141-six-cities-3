import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from 'hooks/use-map';
import {ShortOffers, ShortOffer, Location, FullOffer} from 'types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, MapType} from 'const';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  type: MapType;
  location: Location;
  offers: ShortOffers | undefined;
  selectedOffer: ShortOffer | FullOffer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [20, 40]
});


function Map({type, location, offers, selectedOffer}: MapProps) {
  location = (selectedOffer && type === MapType.Offer)
    ? selectedOffer.location
    : location;

  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const markerLayer = useRef(layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [location, map]);

  useEffect(() => {
    if (map && offers) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.title === selectedOffer.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer.current);
      });
    }
  }, [map, offers, selectedOffer]);

  return <section className={`${type}__map map`} ref={mapRef} />;
}


export default Map;
