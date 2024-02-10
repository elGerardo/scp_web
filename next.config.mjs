/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_BASE_URL: process.env.NEXT_API_BASE_URL
    }
};

export default nextConfig;
