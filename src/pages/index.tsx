import PostContainer from "@/components/UI/Blog/PostContainer";
import WeAre from "@/components/UI/Landing/WeAre";
import WhatWeDo from "@/components/UI/Landing/WhatWeDo";
import WhoAreWe from "@/components/UI/Landing/WhoAreWe";
import Manifesto from "@/components/UI/Manifesto";
import Participation from "@/components/UI/Participation";
import { Box, Container } from "@mui/material";

function Home() {
  return (
    <>
      <Container maxWidth="xl">
        {/* <WeAre /> */}
        <WhoAreWe />
        <WhatWeDo />
        <Manifesto />
        <Participation />
        {/* <PostContainer /> */}
      </Container>
    </>
  );
}

export default Home;
