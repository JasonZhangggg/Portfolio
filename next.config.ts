import type { NextConfig } from "next";

// GitHub Pages serves this repo from /Portfolio, so production builds
// for Pages need a basePath. Local dev stays at the root.
const basePath = process.env.GITHUB_PAGES ? "/Portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
