/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  // Pin the Turbopack root to this project. Next otherwise infers the
  // workspace root from any lockfile it finds upwards, and a stray
  // ~/package-lock.json made it resolve this app as ./portfolio-website/...
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
