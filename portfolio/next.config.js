/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  images: {
    domains: ["res.cloudinary.com", "encrypted-tbn0.gstatic.com"],
  },
};

module.exports = nextConfig;
