import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function generateStaticParams() {
  const fs = require("fs");
  const path = require("path");

  const postsDirectory = path.join(process.cwd(), "content/blog");

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName: string) => ({
    slug: fileName.replace(".md", ""),
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {

  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return (
    <main style={{ maxWidth: "700px", margin: "auto", padding: "40px" }}>
      <h1>{data.title}</h1>
      <p>{data.date}</p>

      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}