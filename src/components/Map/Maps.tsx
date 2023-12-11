import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";
import useGlobalContext from "../../hooks/useGlobalContext";
import { generateMap } from "../../services/generateMapa";
import { getCurrentLocation } from "../../services/geolocation";
import "./style.css";

export default function Maps() {
  const { details } = useGlobalContext();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const updateMapWithLocation = async () => {
      try {
        const [latitude, longitude] = await getCurrentLocation();
        const center: LatLngExpression = details.lat
          ? [details.lat, details.lng]
          : [latitude, longitude];

        if (mapContainerRef.current) {
          generateMap(mapRef, mapContainerRef, center);
        }
      } catch (error) {
        console.error("Error updating map with current location:", error);
      }
    };

    updateMapWithLocation();
  }, [details]);

  return <div id="map" ref={mapContainerRef}></div>;
}
