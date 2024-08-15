import { MdxLayout } from "@/components/BlogLayout";
import { getPost } from "@/lib/getPost";
import { getPostSlugs } from "@/lib/getPostSlugs";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

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
        <h2>{post.data.title}</h2>
        <p>{post.data.description}</p>
        <MDXRemote {...mdxSource} />
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
