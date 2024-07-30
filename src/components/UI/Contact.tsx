import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ItemCard } from "./ItemCard";
import { Instagram, Mail } from "@mui/icons-material";
import { useRef, useState } from "react";
import { LoadingButton } from "@mui/lab";
import ContactInfo from "./ContactInfo";

// create a contact us page

export default function Contact() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setLoading(true);
    // eslint-disable-next-line no-console
    const response = await fetch("/api/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: data.get("message"),
        name: data.get("name"),
        email: data.get("email"),
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
      <Typography
        variant="h4"
        sx={{ textAlign: isMobile ? "center" : "start" }}
      >
        Contact Us 📧
      </Typography>
      <ItemCard justify="center" direction="column">
        <div>
          <Typography variant="h5" sx={{ mb: "10px" }}>
            Form
          </Typography>
          <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
            <FormGroup sx={{ mb: "10px" }}>
              <FormControl sx={{ mb: "10px" }} required>
                <InputLabel htmlFor="message">Your Message</InputLabel>
                <Input
                  name="message"
                  aria-describedby="Message"
                  placeholder="Your Message"
                  required
                />
              </FormControl>
              <FormControl sx={{ mb: "10px" }} required>
                <InputLabel htmlFor="name">Your Name</InputLabel>
                <Input
                  name="name"
                  aria-describedby="name"
                  placeholder="Your Name"
                  required
                />
              </FormControl>
              <FormControl sx={{ mb: "20px" }} required>
                <InputLabel htmlFor="email">Your Email</InputLabel>
                <Input
                  name="email"
                  aria-describedby="email"
                  placeholder="Your Email"
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
      <ContactInfo />
    </>
  );
}
