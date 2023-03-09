import { LatLng } from "leaflet";
import * as React from "react";

type NewItemDataType = {
  instagram: string;
  latLng: LatLng | number[];
  isUskEvent: boolean;
  location: string;
  photoUrl: string;
};

type mapMarkerType = {
  instagram: string;
  latLng: LatLng | number[];
  isUskEvent: boolean;
  location: string;
  photoUrl: string;
  updateData: (data: NewItemDataType) => void;
};

export const mapMarkerContext = React.createContext<NewItemDataType | null>(
  null
);

const mapMarkerProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [mapMarker, setMapMarker] = React.useState<NewItemDataType>({
    instagram: "",
    latLng: [0, 0],
    isUskEvent: true,
    location: "",
    photoUrl: "",
  });

  const updateData = (data: NewItemDataType) => {
    setMapMarker(data);
  };
};
