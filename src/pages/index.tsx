import Manifesto from "@/components/UI/Manifesto";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Manifesto />
      </Container>
    </>
  );
}