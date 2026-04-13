import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
  const posts = getAllPosts();

  const blogEntries = posts.map((post) => ({
    url: `https://paulatienza.dev/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: "https://paulatienza.dev",
      lastModified: new Date(),
    },
    {
      url: "https://paulatienza.dev/blog",
      lastModified: new Date(),
    },
    ...blogEntries,
  ];
}