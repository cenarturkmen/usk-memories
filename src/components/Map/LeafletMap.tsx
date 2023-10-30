import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression, map } from "leaflet";
import L from "leaflet";
import { UserMarker } from "./UserMarker";
import { useRef, useState } from "react";
import { Button, useMediaQuery } from "@mui/material";
import { MapFormDataType, MarkerDataType } from "@/types";
import { useSession } from "next-auth/react";
import { SearchField } from "./SearchField";

const icon = (iconSize: [number, number]) =>
  L.icon({ iconUrl: "/images/user-marker.png", iconSize: iconSize });

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
  //const [zoom, setZoom] = useState(11);
  const { status } = useSession();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const buttonLeftMargin = isMobile ? "80%" : "80%";
  const zoomRef = useRef(null);
  const [Zoom, setZoom] = useState(9);

  const MapEvents = () => {
    useMapEvents({
      zoomend(e) {
        setZoom(e.target._zoom);
      },
    });
    return <></>;
  };

  return (
    <MapContainer
      className="w-screen h-screen"
      center={mapPosition}
      zoom={Zoom}
      scrollWheelZoom={true}
      maxZoom={18}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <MapEvents />
      {data &&
        data.map((point, index) => (
          <Marker
            position={L.latLng(point.latLng)}
            icon={icon(calculateIconSizeWithZoomLevel(Zoom))}
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
      {/* <Zoom></Zoom> */}
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

const calculateIconSizeWithZoomLevel = (zoom: number): [number, number] => {
  if (zoom < 10) {
    return [24, 24];
  }
  if (zoom < 12) {
    return [32, 32];
  }
  if (zoom < 14) {
    return [40, 40];
  }

  return [50, 50];
};
