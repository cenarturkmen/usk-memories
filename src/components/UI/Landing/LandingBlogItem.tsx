import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ItemCard } from "../ItemCard";
import { useMediaQuery } from "@mui/material";

interface LandingBlogItemProps {
  href: string;
  post: {
    date: string;
    description: string;
    title: string;
    img: string;
  };
}

export default function LandingBlogItem(props: LandingBlogItemProps) {
  const { post } = props;
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Grid item xs={12} md={1} sx={{ marginBottom: "0.5rem" }}>
      <CardActionArea
        sx={{
          "&:hover": {
            backgroundColor: "transparent", // Change this to the color you want
            borderRadius: "1rem",
          },
        }}
        href={props.href}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            background: "#121212",
            margin: "1rem 0rem 0.1rem 0rem",
            padding: isMobile ? "2rem 0rem 2rem 0rem" : "0rem",
            borderRadius: "1rem",
            color: "white",
            opacity: "0.95",
          }}
        >
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
              width: isMobile ? 300 : 200,
              alignSelf: "center",
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
