/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const theme = {
  extend: {},
};
export const plugins = [require('tailwind-scrollbar-hide')];
// eslint-disable-next-line no-unused-vars
const newLocal = require('dotenv').config();

