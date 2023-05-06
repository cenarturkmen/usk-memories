import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Image from "next/image";
import { convertInstagramUrl } from "@/utils/convert-ig-url";
import { IGImage } from "../IGImage";
import { Button, Grid } from "@mui/material";
import { ItemCard } from "../ItemCard";
import { MarkerDataType } from "@/types";

type Marker = {
  instagram: string;
  latLng: [number, number];
  isUskEvent: boolean;
  description: string;
  location: string;
  photoUrl: string;
  _id: string;
  email: string;
  user: string;
  date: number;
};

interface MarkerInfoProps {
  marker: Marker;
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
            <Typography variant="h6">{marker.location}</Typography>
            <Typography variant="h6">{marker.date}</Typography>
            <Typography variant="h6">
              {marker.isUskEvent ? "In Event" : "Solo"}
            </Typography>
            <Typography variant="h6">{marker.latLng}</Typography>
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
