import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "torixhealth.com",
          },
        ],
        destination: "https://www.torixhealth.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
