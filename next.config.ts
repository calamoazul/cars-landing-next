import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.peugeot.es',
        port: '',
        pathname: '/content/**',
      },
    ],
  },
}

export default nextConfig;
