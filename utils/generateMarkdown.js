// function to generate markdown for README
function generateMarkdown(data) {
  return `
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
![License](githttps://img.shields.io/badge/license-${data.license}-blue)

## Contributions
${data.contribute}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}


module.exports = generateMarkdown;
