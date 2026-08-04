import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: "/home/ubuntu/ciloktech",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
