/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        WEATHERSTACK_API_KEY: process.env.WEATHERSTACK_API_KEY,
    },
};

export default nextConfig;