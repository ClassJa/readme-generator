// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Your project title?',
        name: 'title'
    }, 
    {
        type: 'Input',
        message: 'Description of your project?',
        name: 'description'
    }, 
    {
        message: "Tests for this project",
        name: 'test'
    },
    {
        message: "What are some questions?",
        name: 'questions'
    },
    {
        type: 'input', 
        message: 'What are the credits for this project?',
        name: 'credits'
       
    },
    {
        type: 'input',
        message: 'Usage of the project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Installation Instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Table of Contents (Optional)?',
        name: 'ToC',
        
    }, 
    {
        type: 'input',
        message: 'What are the badges for this project (Optional)?',
        name: 'badges'
    },
    {
        type: 'list',
        message: 'What license did you use?',
        name: 'license',
        choices: ['None', 'MIT', 'Apache License 2.0']

    }
]
inquirer
.prompt(questions)
.then(response => writeToFile(`${response.title}.md`, generateMarkdown(response)))

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err => (err) ? console.error("error") : console.log(`Readme created for ${fileName}!`))
}

// TODO: Create a function to initialize app
function init() {
    // what to do here?
    // writeToFile()
}

// Function call to initialize app
init();
