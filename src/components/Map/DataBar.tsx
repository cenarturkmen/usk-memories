import { IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import { convertInstagramUrl } from "@/utils/convert-ig-url";

interface DataBarProps {
  instagram: string;
  isUskEvent: boolean;
  location: string;
  photoUrl: string;
  description: string;
  latLng: [number, number];
  setShowDataBar: (state: boolean) => void;
}

export default function DataBar({
  instagram,
  isUskEvent,
  location,
  photoUrl,
  description,
  latLng,
  setShowDataBar,
}: DataBarProps) {
  return (
    <div
      className="flex flex-col center bg-black absolute mx-2 h-full w-56"
      style={{ zIndex: 5000 }}
    >
      <div className="flex justify-end">
        <IconButton onClick={() => setShowDataBar(false)}>
          <CloseIcon className="mb-2" />
        </IconButton>
      </div>
      <Typography variant="h4" gutterBottom>
        Marker Info
      </Typography>
      <Typography variant="body1" gutterBottom>
        <InstagramIcon /> {instagram}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {isUskEvent ? "Drew in Event" : "Drew Solo"}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Location: {location}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Description: {description}
      </Typography>
      {photoUrl && (
        <Image
          src={convertInstagramUrl(photoUrl) + "media/?size=l"}
          alt={location}
          width={"300"}
          height={"500"}
        />
      )}
    </div>
  );
}