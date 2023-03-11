import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import { UserMarker } from "./UserMarker";
import { useState } from "react";
import { points } from "./MockData";
import { Button } from "@mui/material";

const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

interface LeafletMapProps {
  addMarker: () => void;
  showForm: boolean;
}

function LeafletMap({ addMarker, showForm }: LeafletMapProps) {
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
      {!showForm && (
        <Button
          variant="contained"
          color="secondary"
          sx={{
            zIndex: 1000,
            position: "absolute",
            left: "85%",
            marginTop: "10px",
          }}
          onClick={addMarker}
        >
          Add Your Mark
        </Button>
      )}
    </MapContainer>
  );
}

export default LeafletMap;
