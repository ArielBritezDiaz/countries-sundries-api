import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

import expressiveCode from "astro-expressive-code";
import expressiveCodeConfig from "./ec.config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '',
      customCss: ['./src/styles/global.css', './src/styles/country-components.css'],
      social: {
        linkedin: 'https://www.linkedin.com/in/ariel-britez-diaz-technical/',
        github: 'https://github.com/ArielBritezDiaz'
      },
      logo: {
        src: './src/assets/logo.svg'
      },
      sidebar: [{
        label: 'Introduction',
        items: [{
          label: 'Overview',
          link: '/docs/introduction/overview/'
        }, {
          label: 'Get API-Key access',
          link: '/docs/introduction/get-api-key/'
        }, {
          label: '¿Why Countries Sundries?',
          link: '/docs/introduction/why-countries-sundries/'
        }, {
          label: 'Concepts and diagrams',
          link: '/docs/introduction/concept/'
        }]
      }, {
        label: 'Getting Started',
        items: [{
          label: 'Getting Started',
          link: '/docs/getting-started/getting-started'
        }, {
          label: 'Basic Usage',
          link: '/docs/getting-started/basic-usage/'
        }, {
          label: 'Supported Data',
          link: '/docs/getting-started/supported-data'
        }]
      },
      {
        label: 'API Docs',
        items: [{
          label: 'Country',
          link: '/docs/api-docs/country/'
        }, {
          label: 'Coat of Arms',
          link: '/docs/api-docs/coat-of-arms/'
        }, {
          label: 'Flag',
          link: '/docs/api-docs/flag'
        }, {
          label: 'Currency',
          link: '/docs/api-docs/currency/'
        }, {
          label: 'Region',
          link: '/docs/api-docs/region/'
        }, {
          label: 'Sub Region',
          link: '/docs/api-docs/sub-region/'
        }]
      },
      {
        label: 'API Reference',
        items: [{
          label: 'Global Parameters',
          link: '/docs/api-reference/global-parameters/'
        }]
      },
      { label: 'Changelog', link: '/docs/changelog/changelog/' }
    ]
    }), tailwind({
      applyBaseStyles: false
    }), expressiveCode(expressiveCodeConfig)
  ]
});