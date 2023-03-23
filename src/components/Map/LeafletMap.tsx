import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import { UserMarker } from "./UserMarker";
import { useState } from "react";
import { Button } from "@mui/material";
import { MapDataType } from "@/types";

const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

interface LeafletMapProps {
  addMarker: () => void;
  showForm: boolean;
  data: MapDataType[];
  setShowRightBar: (state: boolean) => void;
  setRightBarData: (state: MapDataType) => void;
}

function LeafletMap({
  addMarker,
  showForm,
  data,
  setShowRightBar,
  setRightBarData,
}: LeafletMapProps) {
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
      {data &&
        data.map((point, index) => (
          <Marker
            position={L.latLng(point.latLng)}
            icon={icon}
            key={index}
            eventHandlers={{
              click: () => {
                setShowRightBar(true);
                setRightBarData({
                  instagram: point.instagram,
                  isUskEvent: point.isUskEvent,
                  location: point.location,
                  photoUrl: point.photoUrl,
                  description: point.description,
                  latLng: point.latLng,
                  id: index,
                });
              },
            }}
          ></Marker>
        ))}
      {showForm && <UserMarker />}
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
