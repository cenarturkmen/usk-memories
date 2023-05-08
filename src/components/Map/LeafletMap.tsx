import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import L from "leaflet";
import { UserMarker } from "./UserMarker";
import { useState } from "react";
import { Button, useMediaQuery } from "@mui/material";
import { MapFormDataType, MarkerDataType } from "@/types";
import { useSession } from "next-auth/react";
import { SearchField } from "./SearchField";

const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

interface LeafletMapProps {
  addMarker: () => void;
  showForm: boolean;
  data: MarkerDataType[];
  setShowRightBar: (state: boolean) => void;
  setRightBarData: (state: MapFormDataType) => void;
}

function LeafletMap({
  addMarker,
  showForm,
  data,
  setShowRightBar,
  setRightBarData,
}: LeafletMapProps) {
  // istanbul's location
  const [mapPosition, setMapPosition] = useState<LatLngExpression>([
    41.0098, 28.9652,
  ]);
  const [zoom, setZoom] = useState(11);
  const { status } = useSession();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const buttonLeftMargin = isMobile ? "80%" : "80%";

  return (
    <MapContainer
      className="w-screen h-screen"
      center={mapPosition}
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
                setMapPosition(point.latLng);
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
      {!showForm && status === "authenticated" && (
        <Button
          sx={{
            zIndex: 1000,
            position: "absolute",
            left: buttonLeftMargin,
            marginTop: "12px",
          }}
          variant="contained"
          color="primary"
          onClick={addMarker}
        >
          Add
        </Button>
      )}
      <div style={{ background: "white" }}>
        <SearchField />
      </div>
    </MapContainer>
  );
}

export default LeafletMap;
