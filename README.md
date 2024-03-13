<!-- [![Countries Sundries API](https://github.com/ArielBritezDiaz.png)](https://countriessundriesapi.com) -->

[![LinkedIn](./public/resources/readme/icons/linkedin-common.svg)](https://www.linkedin.com/in/ariel-britez-diaz-technical/)
[![Portfolio](./public/resources/readme/icons/www.svg)](https://arielbritezdiaz.github.io/portfolio/)

[![Countries Sundries Logo](./public/resources/readme/logo/V6.svg)](http://countriessundries.com/)

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

## Licence
To view the license under which Countries Sundries is licensed, [Click here!](https://github.com/ArielBritezDiaz/countriesSundriesApi?tab=MIT-1-ov-file)