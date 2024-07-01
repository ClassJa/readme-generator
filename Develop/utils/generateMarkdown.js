const license = require('../index')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
    return data['license']

  // come back to this logic if necessary
  // if (license !== "None") {
  //   return 
  //   // link for the badges
  // } 
  //   return ""
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return 
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


    ## License: ${renderLicenseBadge(data)}


    ## Badges: ${data.badges}


    ## Contributing: ${data.credits}


    ## Tests: ${data.test}


    ## Questions: ${data.questions}
    `
}

module.exports = generateMarkdown;
