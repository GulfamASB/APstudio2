/** @type {import('next').NextConfig} */
const nextConfig = {
  target: 'serverless',
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "t4.ftcdn.net",
            port: '',
            pathname: '/account123/**',
          },
        ]
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
        },
      ],
    },
}

module.exports = nextConfig
