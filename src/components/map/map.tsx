import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from 'hooks/use-map';
import {ShortOffers, Location, BaseOffer} from 'types/offer';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT, MapSource} from 'const';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  source: MapSource;
  location: Location;
  offers?: ShortOffers;
  selectedOffer?: BaseOffer;
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


function Map({source, location, offers, selectedOffer}: MapProps) {
  const centerLocation = (selectedOffer && source === MapSource.Offer)
    ? selectedOffer.location
    : location;

  const mapRef = useRef(null);
  const map = useMap(mapRef, centerLocation);
  const markerLayer = useRef(layerGroup());


  useEffect(() => {
    if (map) {
      map.setView([centerLocation.latitude, centerLocation.longitude], centerLocation.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [centerLocation, map]);

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


  return <section className={`${source}__map map`} ref={mapRef} />;
}


export default Map;
