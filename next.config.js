/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-ist1-1.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "www.instagram.com",
      },
    ],
  },
};

module.exports = nextConfig;
