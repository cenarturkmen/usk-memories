import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [38, 50],
  shadowSize: [50, 64],
  iconAnchor: [22, 34], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76],
});

export function UserMarker() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const map = useMapEvents({
    click: (e) => {
      console.log(e);
      setPosition(e.latlng);
      console.log(position);
    },
  });
  return (
    <Marker
      position={position}
      icon={icon}
      eventHandlers={{
        click: (e) => {
          console.log("marker clicked", e);
        },
      }}
    >
      <Popup position={position}>Add your info to left</Popup>
    </Marker>
  );
}
