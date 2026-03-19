import {Location, Offer} from '../types/offer.ts';
import useMap from '../hooks/useMap.ts';
import {useEffect, useRef} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../const.ts';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  mapCenter: Location;
  points: Offer[];
  selectedPoint: Offer | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


export default function Map(props: MapProps) {
  const {mapCenter, points, selectedPoint} = props;
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapRef, mapCenter);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPoint !== null && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);


  return <div style={{height: '100%'}} ref={mapRef}></div>;
}
