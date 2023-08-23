/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // {
      //   source: '/myyja',
      //   destination: '/myyjarekry',
      //   permanent: true,
      // },
      {
        source: '/myyja',
        destination: '/myyjainfo',
        permanent: true,
      },
    ]}
}

module.exports = nextConfig
