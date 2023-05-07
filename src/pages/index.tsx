import WhatWeDo from "@/components/UI/Landing/WhatWeDo";
import WhoAreWe from "@/components/UI/Landing/WhoAreWe";
import Layout from "@/components/UI/Layout";
import Manifesto from "@/components/UI/Manifesto";
import Participation from "@/components/UI/Participation";
import { Container } from "@mui/material";

function Home() {
  return (
    <div>
      <Layout>
        <Container maxWidth="xl">
          {/* <WeAre /> */}
          <WhoAreWe />
          <WhatWeDo />
          <Manifesto />
          <Participation />
          {/* <PostContainer /> */}
        </Container>
      </Layout>
    </div>
  );
}

export default Home;
