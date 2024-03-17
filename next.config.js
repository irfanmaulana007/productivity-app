/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    output: 'standalone',
    reactStrictMode: false,
    images: {
        domains: ['cdn-icons-png.freepik.com'],
    },
}

module.exports = nextConfig
