/** @type {import('next').NextConfig} */
const nextConfig = {
  async exportPathMap() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      // Add more pages as needed
    };
  },
}

module.exports = nextConfig
