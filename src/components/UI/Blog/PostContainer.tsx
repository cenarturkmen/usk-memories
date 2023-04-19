import React from "react";
import Post from "./Post";
import { Box } from "@mui/material";

export default function PostContainer() {
  return (
    <Box sx={{ marginTop: "2rem" }}>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Box>
  );
}

// create a dummy data file for the Post component
// Path: src/data/blog.ts
export const posts = [
  {
    title: "Title of a longer featured blog post",
    date: "Nov 12",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Title of a longer featured blog post",
    date: "Nov 12",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Title of a longer featured blog post",
    date: "Nov 12",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Title of a longer featured blog post",
    date: "Nov 12",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Title of a longer featured blog post",
    date: "Nov 12",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Title of a longer featured blog post",
    date: "Nov 12",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Title of a longer featured blog post",
    date: "Nov 12",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];
