import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  //google.api.storage config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      //cloudfront
      {
        protocol: "https",
        hostname: "d2zdpiztbgorvt.cloudfront.net",
        port: "",
        pathname: "/**",
      },

      //www.fifthavebarbershop.com
      {
        protocol: "https",
        hostname: "www.fifthavebarbershop.com",
        port: "",
        pathname: "/**",
      },
      //cloudinary
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
