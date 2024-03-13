import starlightPlugin from '@astrojs/starlight-tailwind';
const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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