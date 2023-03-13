/**
 * @module tailwind.config
 *
 * 
 * @author montier.elliott@gmail.com
 * @description Tailwind CSS configuration
 */
/** @type {import('tailwindcss').Config} */

/**
 * Files processed by Tailwind CSS.
 * 
 * 
 * @type {string[]}
 */
 export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];

/**
 * Theme settings
 * 
 * 
 * @type {object}
 * @property {object} extend - Overides default theme.
 */
export const theme = {
  extend: {},
};

/**
 * Plugins for Tailwind CSS.
 * 
 * 
 * @type {object[]}
 */
export const plugins = [];
