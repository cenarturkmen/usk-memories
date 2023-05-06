import { GeoSearchControl, SearchElement } from "leaflet-geosearch";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import L from "leaflet";

const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  iconSize: [38, 50],
  shadowSize: [50, 64],
  iconAnchor: [22, 34], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -25],
});

export const SearchField = () => {
  // @ts-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchControl = new GeoSearchControl({
    provider: new OpenStreetMapProvider(),
    autoClose: true,
    keepResult: true,
    animateZoom: true,
    searchLabel: "Enter address",
    showPopup: true,
    marker: {
      icon: icon,
      draggable: false,
    },
    onSubmit: (e: SearchElement) => {
      console.log("onsubmit", e);
    },
    
  });

  const map = useMap();
  useEffect(() => {
    map.addControl(searchControl);
    map.on("geosearch/showlocation", (e) => {
      console.log("geosearch/showlocation", e);
    });
    return () => {
      map.removeControl(searchControl);
    };
  }, [map, searchControl]);

  return null;
};
