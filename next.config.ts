import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Terapias",
  assetPrefix: "/Terapias",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
