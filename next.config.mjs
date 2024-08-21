/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: [],
  },
};

export default nextConfig;
