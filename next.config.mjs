/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    env: {
        WEATHERSTACK_API_KEY: process.env.WEATHERSTACK_API_KEY,
    },
};
