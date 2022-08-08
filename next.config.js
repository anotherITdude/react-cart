/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    loader: 'akamai',
    path: '',
    },
  // basePath: '/react-cart',
  // assetPrefix: '/react-cart', 
  swcMinify: true,
}

module.exports = nextConfig