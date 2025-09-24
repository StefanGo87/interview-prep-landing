// next.config.mjs
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
export default {
  output: "export",                // write static site to ./out
  images: { unoptimized: true },   // safe if you use next/image
  basePath,                        // e.g. "/interview-prep-landing"
  assetPrefix: basePath ? `${basePath}/` : undefined
};
