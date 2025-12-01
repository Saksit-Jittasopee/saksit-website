import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/saksit-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
