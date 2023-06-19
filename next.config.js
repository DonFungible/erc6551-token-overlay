/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,

  // Temporary fix for rainbowkit:
  // https://github.com/rainbow-me/rainbowkit/issues/1260
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      encoding: false,
    };
    return config;
  },
};

module.exports = nextConfig;
