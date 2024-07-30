import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ItemCard } from "@/components/UI/ItemCard";
import { useRef, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { Container } from "@mui/material";
import Layout from "@/components/UI/Layout";

function AddMeeting() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);

    setLoading(true);

    const latittudeLocal = data.get("Latittude");
    const longitudeLocal = data.get("Longitude");
    const response = await fetch("/api/meeting/add-meeting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.get("name"),
        location: data.get("location"),
        latLang: [
          latittudeLocal ? parseFloat(String(latittudeLocal)) : 0,
          longitudeLocal ? parseFloat(String(longitudeLocal)) : 0,
        ],
        date: data.get("date"),
      }),
    });

    if (response.status == 200) {
      formRef.current?.reset();
      setSuccess(true);
      setError(false);
      setLoading(false);
    } else {
      setSuccess(false);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <>
      <Layout>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{ textAlign: isMobile ? "center" : "start" }}
          >
            Add Meeting 📝
          </Typography>
          <ItemCard justify="center" direction="column">
            <div>
              <Typography variant="h5" sx={{ mb: "10px" }}>
                Meeting
              </Typography>
              <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
                <FormGroup sx={{ mb: "10px" }}>
                  <FormControl sx={{ mb: "10px" }} required>
                    <InputLabel htmlFor="name">Meeting Name</InputLabel>
                    <Input
                      name="name"
                      aria-describedby="Message"
                      placeholder="Meeting Name"
                      required
                    />
                  </FormControl>
                  <FormControl sx={{ mb: "10px" }} required>
                    <InputLabel htmlFor="location">Location</InputLabel>
                    <Input
                      name="location"
                      aria-describedby="location"
                      placeholder="Location"
                      required
                    />
                  </FormControl>
                  <FormControl sx={{ mb: "20px" }}>
                    <InputLabel htmlFor="Latittude">
                      Cordinates Latittude
                    </InputLabel>
                    <Input
                      name="Latittude"
                      aria-describedby="Latittude"
                      placeholder="Latittude"
                      required
                    />
                  </FormControl>
                  <FormControl sx={{ mb: "20px" }}>
                    <InputLabel htmlFor="Longitude">
                      Cordinates Longitude
                    </InputLabel>
                    <Input
                      name="Longitude"
                      aria-describedby="Longitude"
                      placeholder="Longitude"
                      required
                    />
                  </FormControl>
                  <FormControl sx={{ mb: "20px" }} required>
                    <InputLabel htmlFor="date">Date</InputLabel>
                    <Input
                      name="date"
                      type="date"
                      defaultValue={new Date().toISOString().split("T")[0]}
                      aria-describedby="cordinates"
                      placeholder="Event Date"
                      required
                    />
                  </FormControl>
                  {!loading ? (
                    <>
                      <Button color="primary" variant="contained" type="submit">
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
                </FormGroup>
              </form>
            </div>
          </ItemCard>
        </Container>
      </Layout>
    </>
  );
}

export default AddMeeting;
