import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT, MapSource } from 'const';
import { Location, BaseOffer, BaseOffers } from 'types/offer';
import useMap from 'hooks/use-map';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  source: MapSource;
  location: Location;
  offers?: BaseOffers;
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


function Map({ source, location, offers, selectedOffer }: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const markerLayer = useRef(layerGroup());


  offers = selectedOffer && offers && (source === MapSource.Offer)
    ? [...offers, selectedOffer]
    : offers;


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
            selectedOffer !== undefined && offer.id === selectedOffer.id
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
