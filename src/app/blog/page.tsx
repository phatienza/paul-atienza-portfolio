import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">

      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Blog</h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          Thoughts, projects, and lessons from my journey building things on the web, and beyond.
        </p>
      </header>

      <div className="divide-y divide-gray-200">

        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block py-8"
          >
            <article>

              <div className="flex items-center justify-between">

                <h2 className="text-2xl font-semibold group-hover:underline">
                  {post.title}
                </h2>

                <span className="text-gray-400 transition group-hover:translate-x-1">
                  →
                </span>

              </div>

              <p className="text-gray-600 mt-2">
                {post.description}
              </p>

              <p className="text-sm text-gray-400 mt-3">
                {post.date} • {post.readingTime}
              </p>

            </article>
          </Link>
        ))}

      </div>

    </main>
  );
}