[![Countries Sundries Logo](./public/resources/logotype/countries_sundries.svg)](http://countriessundries.com/)

<p align="center">
  <a href="https://www.linkedin.com/in/ariel-britez-diaz-technical/">
    <img src="https://badgen.net/badge/LinkedIn/Ariel Diaz?color=blue" alt="LinkedIn/Ariel Diaz" />
  </a>
  <a href="mailto:arielbritezdiaz@email.com">
    <img src="https://badgen.net/badge/Gmail/arielbritezdiaz@gmail.com?color=blue" alt="Gmail/arielbritezdiaz@gmail.com" />
  </a>
  <a href="https://arielbritezdiaz.github.io/portfolio/">
    <img src="https://badgen.net/badge/Portfolio/Ariel Diaz?color=blue" alt="" />
  </a>
  <a href="https://github.com/ArielBritezDiaz">
    <img src="https://badgen.net/badge/GitHub/Ariel Diaz?color=blue" alt="" />
  </a>
  <a href="https://www.paypal.com/paypalme/ArielBritezDiaz">
    <img src="https://badgen.net/badge/Support Me/PayPal?color=red" alt="PayPal: https://www.paypal.com/paypalme/ArielBritezDiaz" />
  </a>
  <a href="">
    <img src="https://badgen.net/badge/Technologies/Click here?color=purple" alt="Technologies" />
  </a>
  <a href="https://opensource.org/licenses/BSD-2-Clause">
    <img src="https://badgen.net/badge/License/BSD 2-Clause?color=green" alt="License/BSD 2-Clause" />
  </a>
  <a href="">
    <img src="https://badgen.net/badge/Date Created/2024-03-15?color=grey" alt="" />
  </a>
</p>

<p align="center">
An API that offers you information about countries and international organizations, including their flags, their sub-regions, and even their currency.
</p>

## Overview
⚠️Notice⚠️: This project is developed entirely by Ariel Diaz, it is very advanced, but several errors have not yet been corrected regarding its deployment to production, therefore it is not yet 100% functional. Thank you very much for reading and understanding, have a nice day and as soon as possible Countries Sundries API will be published so you can enjoy this service! 

In this section you will find a basic guide to use and the most relevant information for its use.

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
If you want to support me and make it possible for both Countries Sundries API and other projects to grow and provide a better service, you can do it through [PayPal](https://www.paypal.com/paypalme/ArielBritezDiaz)[![PayPal](./public/resources/icons/paypal.svg)](https://www.paypal.com/paypalme/ArielBritezDiaz) !\
Thank you so much!

## Licence
To view the license under which Countries Sundries is licensed, [Click here!](./LICENSE.md)
