/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ['cdn.pixabay.com', 'images.pexels.com'],
//   },
//   webpack5: true,
//   webpack: (config) => {
//     config.resolve.fallback = {
//       crypto: false,
//       fs: false,
//       http: false,
//       https: false,
//       stream: false,
//     }

//     return config
//   },
// }

module.exports = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      crypto: false,
      fs: false,
      http: false,
      https: false,
      stream: false,
    }

    return config
  },
  images: {
    domains: ['cdn.pixabay.com', 'images.pexels.com'], // 이곳에 에러에서 hostname 다음 따옴표에 오는 링크를 적으면 된다.
  },
}

// module.exports = nextConfig
