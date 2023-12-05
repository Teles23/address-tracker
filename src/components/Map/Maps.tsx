import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import blackIconUrl from "../../assets/icon-location.svg";
import useGlobalContext from "../../hooks/useGlobalContext";
import "./style.css";

const blackIcon = new L.Icon({
  iconUrl: blackIconUrl,
  iconSize: [35, 41],
});

L.Marker.prototype.options.icon = blackIcon;

export default function Maps() {
  const { details } = useGlobalContext();

  const mapContainerRef = useRef(null);
  useEffect(() => {
    if (mapContainerRef.current) {
      const map = L.map(mapContainerRef.current).setView(
        [details.lat, details.lng],
        15
      );
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      L.marker([details.lat, details.lng], {
        icon: blackIcon,
      }).addTo(map);

      return () => {
        map.remove();
      };
    }
  }, [details.lat, details.lng]);

  return <div id="map" ref={mapContainerRef}></div>;
}
