/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This prevents the build from crashing by skipping strict image optimization
    unoptimized: true,
  },
};

export default nextConfig;