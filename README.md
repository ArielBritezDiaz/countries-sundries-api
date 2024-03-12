<!-- [![Countries Sundries API](https://github.com/ArielBritezDiaz.png)](https://countriessundriesapi.com) -->

[![LinkedIn](./public/resources/readme/icons/linkedin-common.svg)](https://www.linkedin.com/in/ariel-britez-diaz-technical/)
[![Portfolio](./public/resources/readme/icons/www.svg)](https://arielbritezdiaz.github.io/portfolio/)

# Countries Sundries API
## Overview
Countries Sundries is an API that offers you information about countries and international organizations, including their flags, their sub-regions, and even their currency. In this section you will find a basic guide to use and the most relevant information for its use.
<!-- [Countries Sundries API](https://countrtiessundriesapi.com) -->

## Getting Started
Check out [Documentation]() for the specifications and get your API key to access the information.

## Usaging API
Example of a simple request for information from countries once we have our API Key.

```js
const fetchApiExample = () => {
  return fetch('http://countriessundries.com/api/v1/country/all', {
    method: 'GET',
    headers: {
      'x-countries_sundries_api-key': 'Bearer x-xxx-xxxx-x',
      'x-api-version': '1'
    }
  })
  .then(response => response.json());
};

fetchApiExample()
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## Technologies
[![NestJs](./public/resources/readme/icons/technologies/nestjs.svg)](https://nestjs.com/)
[![MySQL](./public/resources/readme/icons/technologies/mysql.svg)](https://www.mysql.com/)
[![Bun](./public/resources/readme/icons/technologies/bun.svg)](https://bun.sh/)
[![Prisma](./public/resources/readme/icons/technologies/prisma.svg)](https://www.prisma.io/)
[![TypeScript](./public/resources/readme/icons/technologies/typescript.svg)](https://www.typescriptlang.org/)

[![Starlight](./public/resources/readme/icons/technologies/starlight%20(copia%202).webp)](https://starlight.astro.build/)
[![Astro](./public/resources/readme/icons/technologies/astro.svg)](https://starlight.astro.build/)
[![Tailwind](./public/resources/readme/icons/technologies/tailwind.svg)](https://tailwindcss.com/)

[![]()]()

## Support

## Licence
