import Typography from "@mui/material/Typography";
import { IGImage } from "../IGImage";
import { Button, Grid } from "@mui/material";
import { ItemCard } from "../ItemCard";
import { MarkerDataType } from "@/types";

interface MarkerInfoProps {
  marker: MarkerDataType;
}

export function MarkerInfo(props: MarkerInfoProps) {
  const { marker } = props;

  return (
    <>
      <ItemCard>
        <IGImage
          src={marker.photoUrl}
          alt={marker.description}
          width={250}
          height={250}
        />
        <div className="flex flex-col">
          <Typography variant="h4">{marker.description}</Typography>
          <Typography variant="h5">{marker.location}</Typography>
          <Typography variant="h5">{marker.date}</Typography>
          <Typography variant="h5">
            {marker.isUskEvent ? "In Event" : "Solo"}
          </Typography>
          <Typography variant="h5">
            {marker.latLng as [number, number]}
          </Typography>
          <div>
            <Button variant="contained" color="primary">
              Edit
            </Button>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
          </div>
        </div>
      </ItemCard>
    </>
  );
}
