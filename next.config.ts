import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/vibe-coding-hub",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
