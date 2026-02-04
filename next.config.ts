import type { NextConfig } from "next";
import Mdx from  '@next/mdx'
const withMDX = Mdx()

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  
};

export default withMDX(nextConfig);
