import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Writing | Paul Henry Atienza",
  description: "A record of things I've learned, seen, and thought about. Japan, software, life, and anything that matters.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Group posts by year
  const postsByYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAFAF7" }}>

      {/* Top bar */}
      <div className="max-w-2xl mx-auto px-6 pt-8 flex justify-between items-center">
        <Link
          href="/"
          className="blog-link-muted text-xs tracking-widest uppercase"
        >
          ← paulatienza.dev
        </Link>
        <span className="text-xs tracking-widest uppercase" style={{ color: "#8C8880" }}>
          Writing
        </span>
      </div>

      {/* Masthead */}
      <header className="max-w-2xl mx-auto px-6 pt-16 pb-12 text-center">
        <h1
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)", color: "#1C1C1C" }}
        >
          Paul Henry Atienza
        </h1>
        <div
          className="w-16 mx-auto mb-5"
          style={{ height: "2px", backgroundColor: "#C9C4BC" }}
        />
        <p className="text-base leading-relaxed" style={{ color: "#5C5751" }}>
          A record of things I&apos;ve learned, seen, and thought about.
          <br />
          Japan · Software · Life · Anything that matters.
        </p>
      </header>

      {/* Posts by year */}
      <main className="max-w-2xl mx-auto px-6 pb-24">
        {years.map((year) => (
          <div key={year} className="mb-14">

            {/* Year marker */}
            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-xs tracking-widest uppercase font-semibold"
                style={{ color: "#8C8880" }}
              >
                {year}
              </span>
              <div className="flex-1" style={{ height: "1px", backgroundColor: "#E5DDD5" }} />
            </div>

            {/* Posts */}
            <div className="space-y-10">
              {postsByYear[year].map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article>
                    <h2
                      className="text-2xl font-bold mb-2 transition-opacity group-hover:opacity-70"
                      style={{ fontFamily: "var(--font-playfair, Georgia, serif)", color: "#1C1C1C" }}
                    >
                      {post.title}
                    </h2>
                    <p
                      className="text-sm mb-2"
                      style={{ fontFamily: "var(--font-merriweather, Georgia, serif)", color: "#5C5751" }}
                    >
                      {post.description}
                    </p>
                    <p className="text-xs tracking-wide" style={{ color: "#8C8880" }}>
                      {post.date} · {post.readingTime}
                    </p>
                  </article>
                </Link>
              ))}
            </div>

          </div>
        ))}
      </main>

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
