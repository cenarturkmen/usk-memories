import Post from "@/components/UI/Blog/Post";
import Layout from "@/components/UI/Layout";
import { getPosts } from "@/lib/getPosts";
import { Box, Container, Typography, useMediaQuery } from "@mui/material";

type Posts = {
  filename: string;
  data: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    img: string;
  };
  content: string;
};

function Blog(param: { posts: Posts[] }) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Layout>
        <Container maxWidth="xl">
          <Typography
            variant="h4"
            sx={{ textAlign: isMobile ? "center" : "start" }}
          >
            Blog 📝
          </Typography>
          <Box sx={{ marginTop: "2rem" }}>
            {param.posts.map((post, index) => (
              <Post
                key={index}
                post={post.data}
                href={"blog/" + post.filename.split(".")[0]}
              />
            ))}
          </Box>
        </Container>
      </Layout>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}
