import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static0.srcdn.com",
      },
      {
        protocol: "https",
        hostname: "pyxis.nymag.com",
      },
    ],
  },
};

export default nextConfig;