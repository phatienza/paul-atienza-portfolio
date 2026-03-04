export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://paulatienza.dev/sitemap.xml",
  };
}