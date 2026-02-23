import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://payroll.politekniklp3i-tasikmalaya.ac.id/:path*",
      },
    ];
  },
};

export default nextConfig;
