import { MapMarkerContext } from "@/context/MapMarkerContext";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Input,
  InputLabel,
  Switch,
} from "@mui/material";
import React, { ChangeEvent, useContext } from "react";

export default function Form() {
  const {
    instagram,
    setInstagram,
    isUskEvent,
    setIsUskEvent,
    location,
    setLocation,
    photoUrl,
    setPhotoUrl,
    latLng,
  } = useContext(MapMarkerContext);

  return (
    <>
      <div className="mx-2 w-44">
        <FormGroup sx={{ mb: "30px" }}>
          <FormControl sx={{ mb: "10px" }} required>
            <InputLabel htmlFor="instagram">Your Instagram Adress</InputLabel>
            <Input
              name="instagram"
              value={instagram}
              aria-describedby="instagram"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInstagram(e.target.value)
              }
            />
          </FormControl>
          <FormControl sx={{ mb: "10px" }}>
            <InputLabel htmlFor="location">Location</InputLabel>
            <Input
              name="location"
              value={location}
              aria-describedby="location"
              required
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLocation(e.target.value)
              }
            />
          </FormControl>
          <FormControl sx={{ mb: "10px" }}>
            <InputLabel htmlFor="photoUrl">Photo URL</InputLabel>
            <Input
              name="photoUrl"
              value={photoUrl}
              required
              aria-describedby="photoUrl"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPhotoUrl(e.target.value)
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel component="legend">Is this USK Event?</FormLabel>
            <FormControlLabel
              control={
                <Switch
                  name="isUskEvent"
                  required
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setIsUskEvent(e.target.checked)
                  }
                />
              }
              label={isUskEvent ? "Yes" : "No"}
            />
          </FormControl>
          <Button
            variant="outlined"
            onClick={() =>
              console.log({ latLng, instagram, isUskEvent, photoUrl, location })
            }
          >
            Click
          </Button>
        </FormGroup>
      </div>
    </>
  );
}
