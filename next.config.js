/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line for static HTML export
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
      },
    ],
  },
  // Since you're deploying to a custom domain at the root, no need for basePath or assetPrefix here
};

module.exports = nextConfig;
