import Manifesto from "@/components/UI/Manifesto";
import Component from "@/components/login-btn";
import { addMarker } from "@/lib/api/marker";
import { Button, Container } from "@mui/material";

export default function Home() {
  const clickHandle = () => {
    console.log("Hello World");
    addMarker({
      id: "1",
      name: "test",
    });
  };
  return (
    <>
      <Container maxWidth="xl">
        <Component />
        <Manifesto />
      </Container>

      <Button variant="contained" color="primary" onClick={clickHandle}>
        Hello World
      </Button>
    </>
  );
}
