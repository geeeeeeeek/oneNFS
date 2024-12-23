/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL;
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "da9h8exvs",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "fi0lxkc1",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
