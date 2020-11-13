// function to generate markdown for README
function generateMarkdown(data) {
  return `
![License](https://img.shields.io/badge/license-${data.license}-blue)
# ${data.title}

${data.description}

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#Questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.title} is distributed under the ${data.license} license

## Contributions

${data.contribute}

## Tests

${data.tests}

## Questions

For any questions, please email <${data.email}>
Or [visit my github](https://github.com/${data.github}/)
`;
}


module.exports = generateMarkdown;
