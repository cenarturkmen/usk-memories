import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngExpression } from "leaflet";
import L from "leaflet";

const icon = L.icon({ iconUrl: "/images/marker-icon.png" });
L.Icon.Default.imagePath = "leaflet_images/";

function LeafletMap() {
  const position: LatLngExpression = [41.0098, 28.9652]; // istanbul's location

  return (
    <MapContainer
      className="w-screen h-screen"
      center={position}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points.map((point, index) => (
        <Marker position={point.LatLng} icon={icon} key={index}>
          <Popup>{point.Name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default LeafletMap;

const points: { Name: string; LatLng: LatLngExpression }[] = [
  {
    Name: "Hagia Sophia",
    LatLng: [41.0085, 28.9773],
  },
  {
    Name: "Blue Mosque",
    LatLng: [41.0054, 28.9764],
  },
  {
    Name: "Topkapi Palace",
    LatLng: [41.0115, 28.9833],
  },
  {
    Name: "Grand Bazaar",
    LatLng: [41.0102, 28.9683],
  },
  {
    Name: "Spice Bazaar",
    LatLng: [41.0173, 28.97],
  },
  {
    Name: "Bosphorus Bridge",
    LatLng: [41.0392, 29.0217],
  },
  {
    Name: "Galata Tower",
    LatLng: [41.0257, 28.9744],
  },
  {
    Name: "Dolmabahce Palace",
    LatLng: [41.0393, 29.0016],
  },
  {
    Name: "Chora Church",
    LatLng: [41.0314, 28.9484],
  },
  {
    Name: "Suleymaniye Mosque",
    LatLng: [41.0168, 28.9647],
  },
];
