import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
    const fs = require("fs");
    const path = require("path");

    const postsDirectory = path.join(process.cwd(), "content/blog");

    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName: string) => ({
        slug: fileName.replace(".md", ""),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContent);

    return {
        title: `${data.title} | Paul Henry Atienza`,
        description: data.description,
        openGraph: {
            title: data.title,
            description: data.description,
            url: `https://paulatienza.dev/blog/${slug}`,
            siteName: "Paul Henry Atienza",
            type: "article",
            ...(data.image && { images: [{ url: data.image }] }),
        },
    };
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
        <main className="max-w-3xl mx-auto px-6 py-12 bg-white text-black">

            <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-black transition mb-8"
            >
                ← Back to Blog
            </Link>

            <header className="mb-10">
                <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
                <p className="text-gray-600">{data.date}</p>
            </header>

            <article
                className="prose prose-lg prose-neutral max-w-none"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

        </main>
    );
}