const license = require('../index')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    return data['license']
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
  return ` 
    # Project Title: ${data.title}

    ## Description: ${data.description}


    ## Table of Contents: ${data.ToC}


    ## Installation Instructions: ${data.installation}


    ## Usage Information: ${data.usage}


    ## Credits: ${data.credits}


    ## License: ${renderLicenseSection(data)}


    ## Badges: ${data.badges}


    ## Contributing: ${data.credits}


    ## Tests: ${data.test}


    ## Questions: ${data.questions}
    `
}

module.exports = generateMarkdown;
