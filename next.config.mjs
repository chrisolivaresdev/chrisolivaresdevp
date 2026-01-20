/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Allows exporting a fully static site via `next export` when possible.
  output: "export",
  trailingSlash: true,
  images: {
    // Next image optimization is not available for static exports.
    // Set to true to avoid runtime dependency on the image optimizer.
    unoptimized: true,
    domains: [
      "cdn.jsdelivr.net",
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
