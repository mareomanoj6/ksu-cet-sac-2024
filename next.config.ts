import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Vercel serves the App Router correctly
  reactStrictMode: true,
};

export default nextConfig;
