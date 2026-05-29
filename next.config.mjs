/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
