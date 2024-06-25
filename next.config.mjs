/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "shop1.phinf.naver.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
