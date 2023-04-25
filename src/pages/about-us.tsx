import Manifesto from "@/components/UI/Manifesto";
import Participation from "@/components/UI/Participation";
import { Container } from "@mui/material";

function AboutUs() {
  return (
    <>
      <Container maxWidth="xl">
        <Manifesto />
        <Participation />
      </Container>
    </>
  );
}

export default AboutUs;
