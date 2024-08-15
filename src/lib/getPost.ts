import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export async function getPost(slug: string): Promise<{
  filename: string;
  data: { [key: string]: string };
  content: string;
}> {
  console.log("slug", slug);
  const postsDirectory = path.join(process.cwd(), "articles");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);

  const mdxContent = await serialize(content);
  console.log("mdxContent", mdxContent); // Log the mdxContent

  console.log("data", data);
  return {
    filename: `${slug}.mdx`,
    data,
    content: mdxContent.compiledSource as string,
  };
}
