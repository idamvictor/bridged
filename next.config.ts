// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 's3.amazonaws.com',
//         port: '',
//         pathname: '/my-bucket/**',
//         search: '',
//       },
//     ],
//   },
// }
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dyp8gtllq/**",
      },
    ],
  },
};

export default nextConfig;