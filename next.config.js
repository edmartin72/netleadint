/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: '/soc/acordeon', destination: '/soc/acordeon.html' }];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'netleading.net' },
      { protocol: 'https', hostname: 'player.vimeo.com' },
    ],
  },
};

module.exports = nextConfig;
