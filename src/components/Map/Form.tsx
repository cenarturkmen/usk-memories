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
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Info } from "@mui/icons-material";
import { useSession } from "next-auth/react";
import { convertInstagramUrl } from "@/utils/convert-ig-url";
import { isValidInstagramPhotoUrl } from "@/utils/is-valid-instagram-url";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { addMarker } from "@/store/slices/userMarkerSlice";

interface FormProps {
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

type ErrorMessage = {
  name: string;
  message: string;
};

export default function Form({ setShowForm }: FormProps) {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const userMarker = useAppSelector((state) => state.userMarker);
  const { instagram, isUskEvent, location, photoUrl, description, latLng } =
    userMarker.data;
  const [form, setForm] = useState({
    instagram,
    isUskEvent,
    location,
    photoUrl,
    description,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [urlError, setUrlError] = useState(false);
  const [errorMessages, setErrorMessages] = useState<ErrorMessage[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      date: Date.now(),
      email: session?.user?.email,
      user: session?.user?.name,
      latLng,
      ...form,
    };
    setLoading(true);

    if (latLng[0] === 0 && latLng[1] === 0) {
      setError(true);
      setSuccess(false);
      setLoading(false);
      if (!errorMessages.find((e) => e.name === "latLng")) {
        errorMessages.push({
          name: "latLng",
          message: "Please enter a valid coordinates",
        });

        return;
      } else {
        setErrorMessages(errorMessages.filter((e) => e.name !== "latLng"));
      }
    }

    if (!isValidInstagramPhotoUrl(form.photoUrl)) {
      setUrlError(true);
      setLoading(false);
      setError(true);
      setSuccess(false);
      if (!errorMessages.find((e) => e.name === "photoUrl")) {
        errorMessages.push({
          name: "photoUrl",
          message: "Please enter a valid instagram link",
        });
      }
      return;
    } else {
      setUrlError(false);
      setErrorMessages(errorMessages.filter((e) => e.name !== "photoUrl"));
    }

    dispatch(addMarker(data));
    setLoading(false);

    if (userMarker.status != "succeeded") {
      setError(true);
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
      setForm({
        instagram: "",
        isUskEvent: false,
        location: "",
        photoUrl: "",
        description: "",
      });
      setErrorMessages([]);
    }
    setLoading(false);
  };

  const formChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "isUskEvent") {
      setForm({ ...form, [e.target.name]: e.target.checked });
    } else if (e.target.name === "photoUrl") {
      setForm({
        ...form,
        [e.target.name]: convertInstagramUrl(e.target.value),
      });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
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
              <InputLabel htmlFor="instagram">Your Instagram</InputLabel>
              <Input
                name="instagram"
                value={form.instagram}
                aria-describedby="instagram"
                placeholder="Your Instagram Account"
                required
                onChange={formChangeHandler}
              />
            </FormControl>
            <FormControl sx={{ mb: "10px" }} required>
              <InputLabel htmlFor="location">Location</InputLabel>
              <Input
                name="location"
                value={form.location}
                aria-describedby="location"
                required
                onChange={formChangeHandler}
              />
            </FormControl>
            <FormControl sx={{ mb: "10px" }} required>
              <InputLabel htmlFor="description">Description</InputLabel>
              <Input
                name="description"
                value={form.description}
                required
                multiline
                minRows={1}
                onChange={formChangeHandler}
              />
            </FormControl>
            <FormControl sx={{ mb: "10px" }} required>
              <InputLabel htmlFor="photoUrl">Photo URL</InputLabel>
              <Input
                name="photoUrl"
                required
                value={form.photoUrl}
                error={urlError}
                aria-describedby="photoUrl"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  formChangeHandler(e);
                  // if (isValidInstagramPhotoUrl(e.target.value)) {
                  //   setUrlError(false);
                  //   formChangeHandler(e);
                  // } else {
                  //   setUrlError(true);
                  // }
                }}
              />
              {urlError ? "Please enter a valid instagram link " : ""}
            </FormControl>
            <FormControl required sx={{ marginTop: "10px" }}>
              <FormLabel component="legend">Is this USK Event?</FormLabel>
              <FormControlLabel
                control={
                  <Switch name="isUskEvent" onChange={formChangeHandler} />
                }
                label={form.isUskEvent ? "Yes" : "No"}
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
            <div className="flex flex-col justify-center pt-4">
              {error ? (
                <Typography variant="body1">
                  {" "}
                  😢 Something went wrong:
                </Typography>
              ) : (
                ""
              )}
              {error &&
                errorMessages.map(({ message }, index) => (
                  <Typography variant="body2" key={index}>
                    {message}
                  </Typography>
                ))}
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
