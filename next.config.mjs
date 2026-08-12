/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export" was removed — static export mode does not support API routes.
  // The server now runs in Next.js server mode (required for /api/contact reCAPTCHA verification).
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // If hosted in a subdirectory e.g. http://server/medtrix/
  // uncomment and set basePath:
  // basePath: "/medtrix",
  // assetPrefix: "/medtrix/",
};

export default nextConfig;
