/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEATHERSTACK_API_KEY: process.env.WEATHERSTACK_API_KEY,
  },
  images: {
    domains: ["cdn.worldweatheronline.com"], // Add the hostname of your external image
  },
};

export default nextConfig;
