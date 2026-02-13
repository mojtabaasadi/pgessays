import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  turbopack: {
    rules: {
      "*.{md,mdx}": {
        loaders: ["@mdx-js/loader"],
        as: "*.tsx",
      },
      
    },
  },
  rewrites: () =>{
    return [
      {
        source: '/:slug.html',
        destination: '/essays/:slug',
      },
    ]
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig);
