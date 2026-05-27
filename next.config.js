/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'netleading.net' },
      { protocol: 'https', hostname: 'player.vimeo.com' },
    ],
  },
};

module.exports = nextConfig;
