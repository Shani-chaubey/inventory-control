/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
    ],
  },
};

export default nextConfig;
