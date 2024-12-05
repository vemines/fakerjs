# Faker.js 9.2.0 Playground

Welcome to the Faker.js Playground! This project is a web-based application that allows you to explore and generate fake data using the Faker.js library. It is built using JavaScript ES Modules (ESM) and provides a user-friendly interface to interact with various Faker.js functionalities.

## Demo

[Demo link](https://vemines.github.io/fakerjs/)

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Custom Category](#Custom)
- [License](#license)

## Features

- **Language Selection**: Choose from a variety of languages to generate locale-specific data.
- **Category Navigation**: Easily navigate through different data categories such as person, company, internet, etc.
- **Data Generation**: Generate random data for each category with a simple click.
- **Copy to Clipboard**: Quickly copy generated data to your clipboard.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Usage

- **Select a Language**: Click on the language icon in the bottom right corner to open the language selection modal. Choose your desired language to generate locale-specific data.
- **Generate Data**: Navigate through the categories using the navigation bar. Click the "Generate" button to create random data for the selected category.
- **Copy Data**: Use the "Copy" button to copy the generated data to your clipboard.

## Custom

For custom common category. Edit [faker.js](js/faker.js#166)
Added

```javascript

common: {
    'api1': faker.api1,                               // if return String
    'api2': faker.api2().bind(null, param),           // if need single param (ex: 'female')
    'api3': () => faker.api3( options: {}),           // if need custom options
    'api4': () => JSON.stringify(faker.api4())        // if return object
},
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- [Faker.js Doc](https://fakerjs.dev/) - The library used for generating fake data.
- [Faker.js Github](https://github.com/faker-js/faker) - The library used for generating fake data.

- Created by VeMines with love ❤️. If you like this project please star ⭐ it
