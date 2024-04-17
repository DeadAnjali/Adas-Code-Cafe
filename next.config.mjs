/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  experimental: {
    // recommended to solve https://github.com/WiseLibs/better-sqlite3/issues/1155
    workerThreads: false,
    cpus: 1,
},
};
export default nextConfig;
