/* eslint-disable @next/next/no-img-element */
import { MdxLayout } from "@/components/BlogLayout";
import { getPost } from "@/lib/getPost";
import { getPostSlugs } from "@/lib/getPostSlugs";
import { Typography } from "@mui/material";
import { MDXRemote } from "next-mdx-remote";

const components = {
  h1: (props: unknown) => <Typography variant="h1" {...props} />,
  h2: (props: any) => <Typography variant="h2" {...props} />,
  p: (props: any) => <Typography variant="body1" {...props} />,
  img: (props: any) => (
    <img
      {...props}
      style={{ justifySelf: "center", margin: "20px" }}
      alt="usk"
    />
  ),
  a: (props: any) => <a {...props} href="#" style={{ display: "grid" }} />,
  // Add more mappings as needed
};
type Post = {
  filename: string;
  data: {
    title: string;
    description: string;
  };
  content: string;
};

export async function getStaticPaths() {
  const slugs = getPostSlugs(); // This should return an array of slugs

  const paths = slugs.map((slug) => ({
    params: { slug }, // Each slug should be an object with a `slug` property
  }));

  return { paths, fallback: false };
}

export default function Blog({ post }: { post: Post }) {
  const mdxSource = {
    compiledSource: post.content, // your compiled MDX content
    scope: {}, // any variables you want in scope
    frontmatter: {}, // any frontmatter data
  };
  return (
    <MdxLayout>
      <div>
        <Typography variant="h2">{post.data.title}</Typography>
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </MdxLayout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return {
    props: {
      post,
    },
  };
}
