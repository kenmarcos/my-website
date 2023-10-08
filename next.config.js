/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
