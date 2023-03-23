/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/myyjaksi',
        destination: '/myyjarekry',
        permanent: true,
      },
    ]}
}

module.exports = nextConfig
