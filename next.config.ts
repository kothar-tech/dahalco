import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The parent `Projects/` directory has its own package-lock.json, which makes
  // Next.js misdetect the monorepo root. Pinning it here keeps builds scoped to
  // this project.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
