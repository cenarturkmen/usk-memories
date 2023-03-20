import { MapMarkerContext } from "@/context/MapMarkerContext";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Input,
  InputLabel,
  Switch,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import addData from "@/firebase/addData";

interface FormProps {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

export default function Form({ setShowForm }: FormProps) {
  const {
    instagram,
    setInstagram,
    isUskEvent,
    setIsUskEvent,
    location,
    setLocation,
    photoUrl,
    setPhotoUrl,
    description,
    setDescription,
    latLng,
  } = useContext(MapMarkerContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = Date.now();
    const data = {
      instagram,
      isUskEvent,
      location,
      description,
      photoUrl,
      latLng,
      date,
    };
    const { result, error } = await addData("marker", data);
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  };

  return (
    <>
      <div className="mx-2 w-56 center">
        <div className="flex justify-end">
          <IconButton onClick={() => setShowForm(false)}>
            <CloseIcon className="mb-2" />
          </IconButton>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup sx={{ mb: "30px" }}>
            <FormControl sx={{ mb: "10px" }} required>
              <InputLabel htmlFor="instagram">
                Your Instagram Address
              </InputLabel>
              <Input
                name="instagram"
                value={instagram}
                aria-describedby="instagram"
                placeholder="Your Instagram Account"
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
              <InputLabel htmlFor="description">Description</InputLabel>
              <Input
                name="description"
                value={description}
                required
                multiline
                minRows={2}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setDescription(e.target.value)
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setIsUskEvent(e.target.checked)
                    }
                  />
                }
                label={isUskEvent ? "Yes" : "No"}
              />
            </FormControl>
          </FormGroup>
          <Typography variant="body2">
            before submitting the form, please make sure that the coordinates
            are not 0
          </Typography>
          <Typography variant="body2">{latLng[0]}</Typography>
          <Typography variant="body2">{latLng[1]}</Typography>
          <Button variant="outlined" type="submit">
            Click
          </Button>
        </form>
      </div>
    </>
  );
}
