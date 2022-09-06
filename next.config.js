/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com', 'images.pexels.com'],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      // crypto: false,
      fs: false,
      // http: false,
      // https: false,
      // stream: false,
    }
    return config
  },
}
module.exports = nextConfig
