import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
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

    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    // Reading time
    const words = content.split(/\s+/).length;
    const readingTime = `${Math.ceil(words / 200)} min read`;

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#FAFAF7" }}>

            {/* Top bar */}
            <div className="max-w-2xl mx-auto px-6 pt-8">
                <Link
                    href="/blog"
                    className="blog-link-muted text-xs tracking-widest uppercase"
                >
                    ← All writing
                </Link>
            </div>

            {/* Post header */}
            <header className="max-w-2xl mx-auto px-6 pt-12 pb-10">
                <h1
                    className="text-4xl md:text-5xl font-bold leading-tight mb-5"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)", color: "#1C1C1C" }}
                >
                    {data.title}
                </h1>
                <p className="text-sm tracking-wide" style={{ color: "#8C8880" }}>
                    {data.date} · {readingTime}
                </p>
                <div className="mt-8" style={{ height: "1px", backgroundColor: "#E5DDD5" }} />
            </header>

            {/* Post content */}
            <main className="max-w-2xl mx-auto px-6 pb-16">
                <div
                    className="blog-prose"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </main>

            {/* Bottom rule + back link */}
            <div className="max-w-2xl mx-auto px-6 pb-16">
                <div className="mb-8" style={{ height: "1px", backgroundColor: "#E5DDD5" }} />
                <Link
                    href="/blog"
                    className="blog-link-muted text-xs tracking-widest uppercase"
                >
                    ← All writing
                </Link>
            </div>

            {/* Footer */}
            <footer className="border-t max-w-2xl mx-auto px-6 py-8 flex justify-between items-center text-xs"
                style={{ borderColor: "#E5DDD5", color: "#8C8880" }}
            >
                <span>Paul Henry Atienza</span>
                <Link href="/" className="transition hover:text-[#1C1C1C]">
                    ← Back to portfolio
                </Link>
            </footer>

        </div>
    );
}
