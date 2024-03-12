<!-- [![Countries Sundries API](https://github.com/ArielBritezDiaz.png)](https://countriessundriesapi.com) -->

[![LinkedIn](./public/resources/readme/icons/linkedin-common.svg)](https://www.linkedin.com/in/ariel-britez-diaz-technical/)
[![Portfolio](./public/resources/readme/icons/www.svg)](https://arielbritezdiaz.github.io/portfolio/)

[![Countries Sundries Logo](./public/resources/readme/logo/V3.svg)](http://countriessundries.com/)

# Countries Sundries API

<div style="display: flex; justify-content: space-between;">
  <div>
    <a href="https://nestjs.com/" style="padding: 0 .4em; text-decoration: none;">
      <img src="./public/resources/readme/icons/technologies/nestjs.svg" alt="NestJs">
    </a>
    <a href="https://www.mysql.com/" style="padding: 0 .4em; text-decoration: none;">
      <img src="./public/resources/readme/icons/technologies/mysql.svg" alt="MySQL">
    </a>
    <a href="https://bun.sh/" style="padding: 0 .4em; text-decoration: none;">
      <img src="./public/resources/readme/icons/technologies/bun.svg" alt="Bun">
    </a>
    <a href="https://www.prisma.io/" style="padding: 0 .4em; text-decoration: none;">
      <img src="./public/resources/readme/icons/technologies/prisma.svg" alt="Prisma">
    </a>
  </div>
  <div>
    <a href="https://starlight.astro.build/" style="padding: 0 .4em; text-decoration: none;">
      <img src="./public/resources/readme/icons/technologies/starlight%20(copia%202).webp" alt="Starlight">
    </a>
    <a href="https://starlight.astro.build/" style="padding: 0 .4em; text-decoration: none;">
      <img src="./public/resources/readme/icons/technologies/astro.svg" alt="Astro">
    </a>
    <a href="https://tailwindcss.com/" style="padding: 0 .4em; text-decoration: none;">
      <img src="./public/resources/readme/icons/technologies/tailwind.svg" alt="Tailwind">
    </a>
  </div>
</div>

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

## Support

## Licence
