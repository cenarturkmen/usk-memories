import { LatLng } from "leaflet";

export type MapDataType = {
    instagram: string;
    latLng: LatLng | number[];
    isUskEvent: boolean;
    location: string;
    photoUrl: string;
  };
  