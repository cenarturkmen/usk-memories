import { MapMarkerContext } from "@/context/MapMarkerContext";
import {
  Button,
  Chip,
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
  useState,
} from "react";
import addData from "@/firebase/addData";
import { LoadingButton } from "@mui/lab";
import { Info } from "@mui/icons-material";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [succes, setSuccess] = useState(false);

  const [urlError, setUrlError] = useState(false);

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

    setLoading(true);

    setPhotoUrl(convertInstagramUrl(photoUrl));

    const { result, error } = await addData("marker", data);
    if (error) {
      setError(true);
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
      setInstagram("");
      setLocation("");
      setPhotoUrl("");
      setDescription("");
    }

    setLoading(false);
  };

  const instagramValidator = (url: string) => {
    const convertedUrl = convertInstagramUrl(url);
    // const regex = new RegExp(
    //   "https://www.instagram.com/p/([A-Za-z0-9-_]+)/.*/"
    // );
    // console.log(convertedUrl);
    // if (regex.test(convertedUrl)) {
    setPhotoUrl(convertedUrl);
    setUrlError(false);
    return true;
    // } else {
    //   setUrlError(true);
    //   return false;
    // }
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
            <FormControl sx={{ mb: "10px" }} required>
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
            <FormControl sx={{ mb: "10px" }} required>
              <InputLabel htmlFor="description">Description</InputLabel>
              <Input
                name="description"
                value={description}
                required
                multiline
                minRows={1}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setDescription(e.target.value)
                }
              />
            </FormControl>
            <FormControl sx={{ mb: "10px" }} required>
              <InputLabel htmlFor="photoUrl">Photo URL</InputLabel>
              <Input
                name="photoUrl"
                value={photoUrl}
                required
                error={urlError}
                aria-describedby="photoUrl"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setPhotoUrl(e.target.value);
                }}
              />
            </FormControl>
            <FormControl required sx={{ marginTop: "10px" }}>
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
          <div className="flex justify-center">
            {!loading ? (
              <Button variant="outlined" type="submit">
                Sent
              </Button>
            ) : (
              <LoadingButton loading>Sending</LoadingButton>
            )}
            {error ? "Something went wrong" : ""}
            {succes ? "Succesfully sent" : ""}
          </div>
        </form>
        <div className="flex justify-center mt-10">
          <Typography variant="body2">
            <Chip
              icon={<Info />}
              sx={{
                height: "auto",
                "& .MuiChip-label": {
                  display: "block",
                  whiteSpace: "normal",
                },
              }}
              label={"Make sure that the coordinates are not 0 0"}
              variant="outlined"
            ></Chip>
            <div className="flex justify-center">
              {latLng[0]} {latLng[1]}
            </div>
          </Typography>
        </div>
      </div>
    </>
  );
}

function convertInstagramUrl(url: string): string {
  // Remove any query parameters or fragment identifier
  url = url.split("?")[0].split("#")[0];

  // Ensure the URL ends with a forward slash
  if (!url.endsWith("/")) {
    url += "/";
  }

  return url;
}
