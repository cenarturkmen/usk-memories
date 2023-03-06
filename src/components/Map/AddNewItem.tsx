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
import { LatLng } from "leaflet";
import React, { ChangeEvent, useState } from "react";

type NewItemDataType = {
  instagram: string;
  latLng: LatLng | number[];
  isUskEvent: boolean;
  location: string;
  photoUrl: string;
};

export default function AddNewItem() {
  const [newItem, setNewItem] = useState<NewItemDataType>({
    instagram: "",
    latLng: [0, 0],
    isUskEvent: false,
    location: "",
    photoUrl: "",
  });

  const handleData = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target!.name;
    const value = e.target!.value;
    setNewItem((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="mx-2 w-44">
        <FormGroup sx={{ mb: "30px" }}>
          <FormControl sx={{ mb: "10px" }}>
            <InputLabel htmlFor="instagram">Your Instagram Adress</InputLabel>
            <Input
              name="instagram"
              value={newItem.instagram}
              aria-describedby="instagram"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleData(e)}
            />
          </FormControl>
          <FormControl sx={{ mb: "10px" }}>
            <InputLabel htmlFor="location">Location</InputLabel>
            <Input
              name="location"
              value={newItem.location}
              aria-describedby="location"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleData(e)}
            />
          </FormControl>
          <FormControl sx={{ mb: "10px" }}>
            <InputLabel htmlFor="photoUrl">Photo URL</InputLabel>
            <Input
              name="photoUrl"
              value={newItem.photoUrl}
              aria-describedby="photoUrl"
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleData(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel component="legend">Is this USK Event?</FormLabel>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="Is this USK Event?"
            />
          </FormControl>
          <Button variant="outlined" onClick={() => console.log(newItem)}>
            Click
          </Button>
        </FormGroup>
      </div>
    </>
  );
}
