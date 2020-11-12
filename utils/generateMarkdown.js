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
  * [Questions](#questions)
  
  ## Installation

  ## Usage
  
  ## License
  
  ## Contributions

  ## Tests

  ## Questions
  
`;
}

module.exports = generateMarkdown;
