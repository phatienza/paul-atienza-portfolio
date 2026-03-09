import fs, { read } from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");


function calculateReadingTime(text: string) {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s+/).length;
  const minutes = Math.ceil(numberOfWords / wordsPerMinute);

  return `${minutes} min read`;
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data,content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      readingTime: calculateReadingTime(content),
    };
  });

  return posts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}