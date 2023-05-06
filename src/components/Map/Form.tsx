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
import { LoadingButton } from "@mui/lab";
import { Info } from "@mui/icons-material";
import { useSession } from "next-auth/react";

interface FormProps {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

export default function Form({ setShowForm }: FormProps) {
  const { data: session } = useSession();
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
  const [success, setSuccess] = useState(false);
  const [urlError, setUrlError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const date = Date.now();
    const data = {
      email: session?.user?.email,
      user: session?.user?.name,
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

    const response = await fetch("/api/add-marker", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setLoading(false);
    const json = await response.json();
    setLoading(false);
    if (json.status != 201) {
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

  return (
    <>
      <div className="px-2 center bg-background w-56">
        <div className="flex justify-end">
          <IconButton onClick={() => setShowForm(false)}>
            <CloseIcon className="mb-2" />
          </IconButton>
        </div>
        <Typography variant="h5" className="text-center">
          Add a new marker
        </Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormGroup sx={{ mb: "30px" }}>
            <FormControl sx={{ mb: "10px" }} required>
              <InputLabel htmlFor="instagram">
                Your Instagram
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
                  if (!instagramLinkValidator(e.target.value)) {
                    setUrlError(true);
                    console.log("error");
                  } else {
                    setUrlError(false);
                  }
                  setPhotoUrl(e.target.value);
                }}
              />
              {urlError ? "Please enter a valid instagram link" : "aaaa"}
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
          <div className="flex flex-col">
            {!loading ? (
              <>
                <Button color="secondary" variant="contained" type="submit">
                  Send
                </Button>
              </>
            ) : (
              <LoadingButton loading>Sending</LoadingButton>
            )}
            <div className="flex justify-center pt-4">
              {error ? "😢 Something went wrong" : ""}
              {success ? "🎉 Successfully sent" : ""}
            </div>
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
            <div className="flex flex-col items-center mt-2">
              <Typography variant="body2"> {latLng[0].toFixed(4)} </Typography>
              <Typography variant="body2"> {latLng[1].toFixed(4)} </Typography>
            </div>
          </Typography>
        </div>
      </div>
    </>
  );
}

// https://www.instagram.com/p/CrH-KZzIMzG/?utm_source=ig_web_copy_link

function instagramLinkValidator(url: string): boolean {
  const regex = new RegExp("https://www.instagram.com/p/([A-Za-z0-9-_]+)/.*/");
  return regex.test(url);
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
