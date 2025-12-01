import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: 'export',
  basePath: '/saksit-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
