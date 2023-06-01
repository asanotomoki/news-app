/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    NEWS_API_URL: process.env.NEWS_API_URL,
    PAGE_SIZE: process.env.PAGE_SIZE,
    DATABASE_URL: process.env.DATABASE_URL,
  },
}

module.exports = nextConfig
