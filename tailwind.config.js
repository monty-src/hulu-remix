/**
 * @module tailwind.config
 *
 * 
 * @author montier.elliott@gmail.com
 * @description Tailwind CSS configuration
 */
/** @type {import('tailwindcss').Config} */

/**
 * Configuration for the Tailwind CSS library.
 *
 * @typedef {Object} TailwindConfig
 * @property {string[]} content - An array of globs for the content to be processed by Tailwind.
 * @property {Object} theme - The configuration object for the theme.
 * @property {Object} theme.extend - An object to extend the base theme.
 * @property {Array} plugins - An array of plugins to use with Tailwind.
 */
 module.exports = {
  /**
   * An array of globs for the content to be processed by Tailwind.
   */
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  /**
   * The configuration object for the theme.
   */
  theme: {
    /**
     * An object to extend the base theme.
     */
    extend: {},
  },
  /**
   * An array of plugins to use with Tailwind.
   */
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
