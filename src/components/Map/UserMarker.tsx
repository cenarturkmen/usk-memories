import { useEffect, useState } from "react";
import { Circle, Marker, Popup, useMapEvents } from "react-leaflet";
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
      map.locate();
    },
  });
  return (
    <Marker position={{ lat: 0, lng: 0 }} icon={icon} eventHandlers={{
        click: (e) => {
          console.log('marker clicked', e)
        },
      }}>    
      <Popup position={position}>
        <div style={{backgroundColor: 'red', position: 'absolute'}}>
            Hello
            <Circle center={position} radius={200} pathOptions={{ color: 'blue' }} />
        </div>
      </Popup>
    </Marker>
    
  );
}
