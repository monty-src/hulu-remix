/**
 * @module postcss.config
 *
 *
 * @author montier.elliott@gmail.com
 * @description Postcss configuration
 */

/**
 * Configuration for the PostCSS.
 *
 * @typedef {Object} PostCSSConfig
 * @property {Object} plugins - PostCSS plugins.
 * @property {Object} plugins.tailwindcss - Tailwindcss plugin.
 * @property {Object} plugins.autoprefixer - Autoprefixer plugin.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
