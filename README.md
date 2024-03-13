<!-- [![Countries Sundries API](https://github.com/ArielBritezDiaz.png)](https://countriessundriesapi.com) -->

[![LinkedIn](./public/resources/readme/icons/linkedin-common.svg)](https://www.linkedin.com/in/ariel-britez-diaz-technical/)
[![Portfolio](./public/resources/readme/icons/www.svg)](https://arielbritezdiaz.github.io/portfolio/)

[![Countries Sundries Logo](./public/resources/logotype/countries_sundries.svg)](http://countriessundries.com/)

<p align="center">
  <a href="https://www.linkedin.com/in/ariel-britez-diaz-technical/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:arielbritezdiaz@email.com">
    <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
  </a>
  <a href="https://opensource.org/licenses/BSD-2-Clause">
    <img src="https://img.shields.io/badge/License-BSD%202--Clause-orange.svg" alt="License" />
  </a>
  <a href="">
    <img src="https://img.shields.io/website-up-down-green-red/http/monip.org.svg" alt="" />
  </a>
  <a href="">
    <img src="https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg" alt="" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/commits-since/ArielBritezDiaz/countries-sundries-api/1.svg" alt="" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/realese/ArielBritezDiaz/countries-sundries-api.svg" alt="" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/followers/ArielBritezDiaz.svg?style=social&label=Follow&maxAge=2592000" alt="" />
  </a>
  <a href="">
    <img src="https://badgen.net/badge/github/license/ArielBritezDiaz/micromatch" alt="" />
  </a>
  <a href="">
    <img src="" alt="" />
  </a>
</p>

<p align="center">
An API that offers you information about countries and international organizations, including their flags, their sub-regions, and even their currency.
</p>

## Overview
 In this section you will find a basic guide to use and the most relevant information for its use.
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
      'x-countries_sundries-key': 'Bearer x-xxx-xxxx-x',
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
If you would like to support me, you can do so in any of these ways, including cooperating so that both Countries Sundries API and other projects can grow and provide a better service.\
Thank you so much!

## Licence
To view the license under which Countries Sundries is licensed, [Click here!](./LICENSE.md)