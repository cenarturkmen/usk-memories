import { useContext, useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapMarkerContext } from "./../../context/MapMarkerContext";

const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [38, 50],
  shadowSize: [50, 64],
  iconAnchor: [22, 34], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76],
});

export function UserMarker() {
  const { setLatLng, latLng } = useContext(MapMarkerContext);
  const map = useMapEvents({
    click: (e) => {
      console.log(e);
      setLatLng([e.latlng.lat, e.latlng.lng]);
      console.log(latLng);
    },
  });
  return (
    <Marker
      position={latLng}
      icon={icon}
      eventHandlers={{
        click: (e) => {
          console.log("marker clicked", e);
        },
      }}
    >
      <Popup position={latLng}>Add your info to left</Popup>
    </Marker>
  );
}
