import PostContainer from "@/components/UI/Blog/PostContainer";
import Manifesto from "@/components/UI/Manifesto";
import Participation from "@/components/UI/Participation";
import { Box, Container } from "@mui/material";

function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <PostContainer />
      </Container>
    </>
  );
}

export default Home;
