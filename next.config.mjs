/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    // This prevents the build from crashing by skipping strict image optimization
    unoptimized: true,
  },
};

export default nextConfig;