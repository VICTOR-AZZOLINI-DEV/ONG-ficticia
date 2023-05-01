/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fastly.picsum.photos', "images.pexels.com"]
  }
    
}

module.exports = nextConfig;
