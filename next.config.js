/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com", "m.media-amazon.com"]
  }
}

module.exports = nextConfig
