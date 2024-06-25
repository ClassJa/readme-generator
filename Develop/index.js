// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt([
    {
        type: 'input',
        message: 'Your project title?',
        name: 'title',
    }, 
    {
        type: 'Input',
        message: 'Description of your project?',
        name: 'description',
    },
    {
        type: 'List',
        message: 'Table of Contents (Optional)?',
        name: 'ToC',
    }, 
    {
        type: 'input',
        message: 'Installation Instructions?',
        name: 'installation',
    }, 
    {
        type: 'input',
        message: 'Usage of the project?',
        name: 'usage'
    },
    {
        type: 'input', 
        message: 'Credits?',
        name: 'What are the credits for this project?'
    },
    {
        type: 'input',
        message: 'What are the badges for this project?',
        name: 'badges'
    }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
