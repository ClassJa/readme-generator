const license = require('../index')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data['license'] === 'MIT') {
    return `${data['license']}: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (data['license'] === 'Apache License 2.0') {
    return `${data['license']}: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseName) {
  if (licenseName === 'MIT') {
    return `https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt`
  } else if (licenseName === 'Apache License 2.0') {
    return `http://www.apache.org/licenses/`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseInfo) {
  const badgeName = renderLicenseBadge(licenseInfo)
  return `${badgeName}: ${renderLicenseLink(badgeName)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title: 
  ${data.title}

  ## License: 
  ${renderLicenseSection(data)}
    
  ## Description:
  ${data.description}
    
  ## Table of Contents: 
  [Title](#title)
  
  [License](#license)
  
  [Description](#description)
  
  [Tests](#tests)
  
  [Installation Instructions](#installation)
  
  [Usage Information](#usage-information)
  
  [Contributings](#contributing)
  
  [Questions](#questions)
  
  
  ## Installation: 
  ${data.installation}
  
  ## Usage-Information:
  ${data.usage}
  
  ## Contributing:
  ${data.credits}
  
  ## Tests:
  ${data.test}
  
  ## Questions: 
  ${`Github: https://github.com/${data.github} Email: ${data.email}`}`
  
}

module.exports = generateMarkdown;
