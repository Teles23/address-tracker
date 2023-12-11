import L, { LatLngExpression } from "leaflet";

import blackIconUrl from "../assets/icon-location.svg";

const blackIcon = new L.Icon({
  iconUrl: blackIconUrl,
  iconSize: [35, 41],
});

L.Marker.prototype.options.icon = blackIcon;

export const generateMap = (
  mapRef: React.MutableRefObject<L.Map | null>,
  mapContainerRef: React.RefObject<HTMLDivElement>,
  center: LatLngExpression
) => {
  if (!mapRef.current) {
    mapRef.current = L.map(mapContainerRef.current!).setView(center, 15);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(mapRef.current);
  } else {
    mapRef.current.setView(center, 15);
  }

  L.marker(center, {
    icon: blackIcon,
  }).addTo(mapRef.current);

  return () => {
    mapRef.current!.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        mapRef.current?.removeLayer(layer);
      }
    });
  };
};
