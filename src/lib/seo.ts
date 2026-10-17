const SITE = "https://www.pdaic.ca";
const OG = `${SITE}/images/og-image.webp`;

export function seo({ title, description, path }: { title: string; description: string; path: string }) {
  const url = SITE + encodeURI(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
