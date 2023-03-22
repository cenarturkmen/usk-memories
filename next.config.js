/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-ist1-1.cdninstagram.com",
      },
    ],
  },
};

module.exports = nextConfig;
