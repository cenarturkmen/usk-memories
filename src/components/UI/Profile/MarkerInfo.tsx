import Typography from "@mui/material/Typography";
import { IGImage } from "../IGImage";
import { Button, Grid } from "@mui/material";
import { ItemCard } from "../ItemCard";
import { MarkerDataType } from "@/types";
import { useSession } from "next-auth/react";

interface MarkerInfoProps {
  marker: MarkerDataType;
}

export function MarkerInfo(props: MarkerInfoProps) {
  const { marker } = props;

  const deleteMarker = async (markerID: string) => {
    console.log(markerID);
    const params = new URLSearchParams({ _id: markerID }); 
    const response = await fetch(`/api/delete-marker-for-profile?${params.toString()}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <ItemCard>
        <IGImage
          src={marker.photoUrl}
          alt={marker.description}
          width={150}
          height={150}
        />
        <div className="flex flex-col ml-12">
          <Typography variant="h4">{marker.description}</Typography>
          <Typography variant="h5">{marker.location}</Typography>
          <Typography variant="h5">{marker.date}</Typography>
          <Typography variant="h5">
            {marker.isUskEvent ? "In Event" : "Solo"}
          </Typography>
          <Typography variant="h5">
            {marker.latLng as [number, number]}
          </Typography>
          <div className="flex justify-between mt-12">
            <Button variant="contained" color="primary">
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
