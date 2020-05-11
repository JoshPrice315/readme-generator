// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)


## Description
 ${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [Contact Me](#contact-me)

## Installation

${data.installation}

## Usage

${data.usage}

## Contribution

${data.contributors}

## Tests

${data.testing}

## License

© ${data.name}
Licensed under the ${data.license} license.

## Contact Me

If you have any questions about my project you can reach me by email at ${data.email}
You can also view more of my projects at https://github.com/${data.github}










`;
}

module.exports = generateMarkdown;
