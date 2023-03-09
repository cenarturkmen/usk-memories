import React, { createContext, useState } from "react";

type MapMarkerContextType = {
  instagram: string;
  latLng: [number, number];
  isUskEvent: boolean;
  location: string;
  photoUrl: string;
  setInstagram: React.Dispatch<React.SetStateAction<string>>;
  setLatLng: React.Dispatch<React.SetStateAction<[number, number]>>;
  setIsUskEvent: React.Dispatch<React.SetStateAction<boolean>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setPhotoUrl: React.Dispatch<React.SetStateAction<string>>;
};

type MapMarkerProviderProps = {
  children: React.ReactNode;
};

const defaultContextData: MapMarkerContextType = {
  instagram: "",
  latLng: [0, 0],
  isUskEvent: true,
  location: "",
  photoUrl: "",
  setInstagram: () => {},
  setLatLng: () => {},
  setIsUskEvent: () => {},
  setLocation: () => {},
  setPhotoUrl: () => {},
};

export const MapMarkerContext =
  createContext<MapMarkerContextType>(defaultContextData);

const MapMarkerProvider: React.FC<MapMarkerProviderProps> = ({ children }) => {
  const [instagram, setInstagram] = useState<string>(
    defaultContextData.instagram
  );
  const [latLng, setLatLng] = useState<[number, number]>(
    defaultContextData.latLng
  );
  const [isUskEvent, setIsUskEvent] = useState<boolean>(
    defaultContextData.isUskEvent
  );
  const [location, setLocation] = useState<string>(defaultContextData.location);
  const [photoUrl, setPhotoUrl] = useState<string>(defaultContextData.photoUrl);

  return (
    <MapMarkerContext.Provider
      value={{
        instagram,
        latLng,
        isUskEvent,
        location,
        photoUrl,
        setInstagram,
        setLatLng,
        setIsUskEvent,
        setLocation,
        setPhotoUrl,
      }}
    >
      {children}
    </MapMarkerContext.Provider>
  );
};

export default MapMarkerProvider;
