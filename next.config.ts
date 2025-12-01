import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/saksit-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
