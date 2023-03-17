/**
 * @module next.config
 *
 *
 * @author montier.elliott@gmail.com
 * @description NextJS configuration
 */
/** @type {import('next').NextConfig} */

/**
 * Configuration object for NextJS application.
 *
 *
 * @typedef {Object} NextConfig
 * @property {boolean} reactStrictMode - React strict mode.
 * @property {Object} images - NextJS images.
 * @property {string[]} images.domains - Allowed domains for NextJS images.
 */

/**
 * Configuration object for the current NextJS application.
 * @type {NextConfig}
 */
const nextConfig = {
  reactStrictMode: false,
};

module.exports = nextConfig;
