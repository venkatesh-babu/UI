import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  css: {
    preprocessorOptions: {
      scss: {
        ilenceDeprecations: ["legacy-js-api"],
      },
    },
  },
};

export default nextConfig;
