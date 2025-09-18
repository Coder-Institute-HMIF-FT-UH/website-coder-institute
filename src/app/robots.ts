import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //   disallow: "", // for disallowing specific paths (later)
    },
    sitemap: 'https://coder-institute.vercel.app/sitemap.xml',
  };
}
