import { Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { setLatLng } from "@/store/slices/userMarkerSlice";

const icon = L.icon({
  iconUrl: "/images/user-marker-select.png",
  iconSize: [30, 40],
  shadowSize: [50, 64],
  iconAnchor: [22, 34], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -25],
});

export function UserMarker() {
  const dispatch = useAppDispatch();
  const latLng = useAppSelector((state) => state.userMarker.data.latLng);

  // const { setLatLng, latLng } = useContext(MapMarkerContext);
  const map = useMapEvents({
    click: (e) => {
      dispatch(setLatLng([e.latlng.lat, e.latlng.lng]));
    },
    dragend: (e) => {},
  });

  return (
    <Marker
      position={latLng}
      icon={icon}
      eventHandlers={{
        click: (e) => {},
      }}
    >
      <Popup position={latLng}>Add your info to left</Popup>
    </Marker>
  );
}
