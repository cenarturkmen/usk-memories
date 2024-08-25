import fs from "fs";
import path from "path";

export function getPostSlugs() {
  const postsDirectory = path.join(process.cwd(), "articles");
  const fileNames = fs.readdirSync(postsDirectory);

  // Remove the file extension from each filename to get the slug
  const slugs = fileNames.map((fileName) => fileName.replace(/\.mdx$/, ""));

  return slugs;
}
