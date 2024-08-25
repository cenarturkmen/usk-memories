import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

interface PostProps {
  href: string;
  post: {
    date: string;
    description: string;
    title: string;
    img: string;
  };
}

export default function Post(props: PostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6} sx={{ marginBottom: "1rem" }}>
      <CardActionArea
        sx={{
          "&:hover": {
            backgroundColor: "transparent", // Change this to the color you want
            borderRadius: "1rem",
          },
        }}
        href={props.href}
      >
        <Card sx={{ display: "flex", borderRadius: "1rem" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 200,
              padding: "10px",
              borderRadius: "1.4rem",
              display: { xs: "flex", sm: "block" },
            }}
            image={post.img}
            alt={post.title}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
