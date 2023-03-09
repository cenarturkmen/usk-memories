import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import { UserMarker } from "./UserMarker";
import { useState } from "react";
import { points } from "./MockData";

const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

function LeafletMap() {
  const position: LatLngExpression = [41.0098, 28.9652]; // istanbul's location
  const [zoom, setZoom] = useState(11);

  return (
    <MapContainer
      className="w-screen h-screen"
      center={position}
      zoom={zoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      {points.map((point, index) => (
        <Marker position={point.LatLng} icon={icon} key={index}>
          <Popup position={[-100, 51.505]} minWidth={500} maxWidth={500}>
            {point.Name}
          </Popup>
        </Marker>
      ))}
      <UserMarker />
    </MapContainer>
  );
}

export default LeafletMap;
