import Typography from "@mui/material/Typography";
import { IGImage } from "../IGImage";
import { Button, Grid, useMediaQuery } from "@mui/material";
import { ItemCard } from "../ItemCard";
import { MarkerDataType } from "@/types";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface MarkerInfoProps {
  marker: MarkerDataType;
  deleteMarker: (markerID: string) => void;
}

export function MarkerInfo(props: MarkerInfoProps) {
  const { marker, deleteMarker } = props;
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <ItemCard>
        <IGImage
          src={marker.photoUrl}
          alt={marker.description}
          width={150}
          height={150}
        />
        <div className={"flex flex-col" + isMobile ? "ml-2" : "ml-12"}>
          <Typography variant="h4">{marker.description}</Typography>
          <Typography variant="h5">{marker.location}</Typography>
          <Typography variant="h5">{marker.date}</Typography>
          <Typography variant="h5">
            {marker.isUskEvent ? "In Event" : "Solo"}
          </Typography>
          {!isMobile && (
            <Typography variant="h5">
              {marker.latLng as [number, number]}
            </Typography>
          )}
          <div className="flex justify-between mt-12">
            <Button variant="contained" color="primary" disabled>
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deleteMarker(marker._id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </ItemCard>
    </>
  );
}
