import Manifesto from "@/components/UI/Manifesto";
import Participation from "@/components/UI/Participation";
import { Container, Typography, useMediaQuery } from "@mui/material";

function AboutUs() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{ textAlign: isMobile ? "center" : "start" }}
        >
          About Us 📝
        </Typography>
        <Manifesto />
        <Participation />
      </Container>
    </>
  );
}

export default AboutUs;
