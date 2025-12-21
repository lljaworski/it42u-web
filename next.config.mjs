/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/it42u-web',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig