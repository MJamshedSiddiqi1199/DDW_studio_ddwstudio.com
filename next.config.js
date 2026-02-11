/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mgx-backend-cdn.metadl.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.metadl.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;