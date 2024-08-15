import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getPosts() {
  const postsDirectory = path.join(process.cwd(), "articles");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    console.log(data, content);

    return {
      filename,
      data,
      content,
    };
  });

  return posts;
}
