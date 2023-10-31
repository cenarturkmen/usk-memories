import { LatLng } from "leaflet";

export type MapFormDataType = {
  instagram: string;
  latLng: LatLng | [number, number];
  isUskEvent: boolean;
  description: string;
  location: string;
  photoUrl: string;
  id: number;
};

export type MarkerDataType = {
  instagram: string;
  latLng: LatLng | [number, number];
  isUskEvent: boolean;
  description: string;
  location: string;
  photoUrl: string;
  _id: string;
  email: string;
  user: string;
  date: number;
};

export type BoundriesType = {
  _northEast: LatLng;
  _southWest: LatLng;
};