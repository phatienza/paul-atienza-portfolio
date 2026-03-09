import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main style={{ maxWidth: "700px", margin: "auto", padding: "40px" }}>
      <h1>Blog</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.slug} style={{ marginBottom: "20px" }}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.description}</p>
            <small>{post.date}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}