/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local placeholder art under /public/images is SVG. This is the
    // documented-safe way to allow SVG through next/image: a strict CSP
    // plus forcing attachment disposition for any SVG response.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Add remote domains here if you load images from a CMS/CDN later.
    remotePatterns: [],
  },
};

export default nextConfig;
