import LandingBlog from "@/components/UI/Landing/LandingBlog";
import WhatWeDo from "@/components/UI/Landing/WhatWeDo";
import WhoAreWe from "@/components/UI/Landing/WhoAreWe";
import Layout from "@/components/UI/Layout";
import Manifesto from "@/components/UI/Landing/Manifesto";
import { Container } from "@mui/material";
import Head from "next/head";
import Participation from "@/components/UI/Participation";

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
          <LandingBlog />
          {/* <PostContainer /> */}
        </Container>
      </Layout>
    </div>
  );
}

export default Home;
