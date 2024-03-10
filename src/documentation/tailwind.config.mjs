import starlightPlugin from '@astrojs/starlight-tailwind';
import colors from 'tailwindcss/colors';
const { addDynamicIconSelectors } = require('@iconify/tailwind');

const accent = { 200: '#00c5b4', 950: '#0f0c0c' };
const gray = { 100: '#f3f7f9', 200: '#e7eff2', 300: '#bac4c8', 400: '#7b8f96', 700: '#757676', 800: '#11393c', 900: '#0c1b1b' };

//002d35
//143f47

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        // Tu color de acento preferido. Indigo es el más cercano a los valores predeterminados de Starlight.
        accent,
        // Tu escala de grises preferida. Zinc es el más cercano a los valores predeterminados de Starlight.
        gray,
      },
      fontFamily: {
        lexend_500: ['lexend-500'],
        lexend_400: ['lexend-400'],
        lexend_300: ['lexend-300'],
      }
		},
	},
	plugins: [
    starlightPlugin(),
    addDynamicIconSelectors(),
  ],
}

import starlightPlugin from '@astrojs/starlight-tailwind';