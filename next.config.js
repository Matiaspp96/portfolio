/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.jsdelivr.net']
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es']
  }
}

module.exports = nextConfig
