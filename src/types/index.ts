import { LatLng } from "leaflet";

export type MapDataType = {
    instagram: string;
    latLng: LatLng | [number, number];
    isUskEvent: boolean;
    description: string;
    location: string;
    photoUrl: string;
    id: number;
  };
  