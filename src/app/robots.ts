import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //   disallow: "", // for disallowing specific paths (later)
    },
    sitemap: 'https://www.coderinstitute.id/sitemap.xml',
  };
}
