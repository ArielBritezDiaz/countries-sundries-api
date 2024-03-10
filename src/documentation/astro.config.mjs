import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import expressiveCode from "astro-expressive-code";
import expressiveCodeConfig from "./ec.config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '',
      // components: {
      //   SocialIcons: './src/components/api-endpoints/region/astro-slots.astro',
      // },
      customCss: ['./src/tailwind.css'],
      social: {
        linkedin: 'https://www.linkedin.com/in/ariel-britez-diaz-technical/',
        github: 'https://github.com/ArielBritezDiaz'
      },
      logo: {
        src: './src/assets/logo.svg'
      },
      favicon: './src/assets/logo.svg',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: './src/assets/logo.svg',
            sizes: '32x32'
          }
        }
      ],
      sidebar: [{
        label: 'Introduction',
        items: [{
          label: 'Overview',
          link: '/docs/introduction/overview/'
        }, {
          label: 'Getting Started',
          link: '/docs/introduction/getting-started/'
        }, {
          label: 'Get API-Key access',
          link: '/docs/introduction/get-api-key/'
        }, {
          label: 'Supported Data',
          link: '/docs/introduction/supported-data/'
        }]
      },
      {
        label: 'API Docs',
        items: [{
          label: 'Country',
          link: '/docs/api-docs/country/'
        }, {
          label: 'Coat of Arm',
          link: '/docs/api-docs/coat-of-arm/'
        }, {
          label: 'Flag',
          link: '/docs/api-docs/flag/'
        }, {
          label: 'Currency',
          link: '/docs/api-docs/currency/'
        }, {
          label: 'Region',
          link: '/docs/api-docs/region/'
        }, {
          label: 'Sub Region',
          link: '/docs/api-docs/sub-region/'
        }, {
          label: 'Image',
          link: '/docs/api-docs/image/'
        }]
      },
      {
        label: 'API Reference',
        items: [{
          label: 'Global Header Parameters',
          link: '/docs/api-reference/global-header-parameters/'
        }, {
          label: 'Global Query Parameters',
          link: '/docs/api-reference/global-query-parameters/'
        }]
      },
      {
        label: 'Project',
        items: [{
          label: 'How did it come about?',
          link: '/docs/project/history/'
        }, {
          label: 'Technologies',
          link: '/docs/project/technologies/'
        }]
      },
      { label: 'Changelog', link: '/docs/changelog/changelog/' }
      ],
      locales: {
        root: {
          label: 'English',
          lang: 'en-US'
        }
      },
      pagefind: true
    }), tailwind({
      applyBaseStyles: false
    }),
    expressiveCode(expressiveCodeConfig),
    icon()
  ]
});