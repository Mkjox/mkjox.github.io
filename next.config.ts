import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/mkjox.github.io",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
