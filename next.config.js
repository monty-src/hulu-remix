/**
 * @module next.config
 *
 *
 * @author montier.elliott@gmail.com
 */
/** @type {import('next').NextConfig} */

/**
 * Configuration object for the current NextJS application
 * 
 * 
 * @type {NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [ "image.tmdb.org"],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

/** exporting */
module.exports = nextConfig;
