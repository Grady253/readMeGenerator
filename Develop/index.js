// TODO: Include packages needed for this application
// These are my packages that are need for my application.
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt({
            {
                type:"input",
                message:"What is the title of your project?",
                name:"Title"
            }

            {
                type:"input",
                message:"Please provide a breif description of project.",
                name:"Description"
            }

            {
                type:"input",
                message:"How is your project installed?",
                name:"Installation"
            }

            {
                type:"input",
                message:"How is your application used?",
                name:"Usage"
            }

            {
                type:"input",
                message:"Did any contribute to this project? If so, who?",
                name:"Contributors"
            }
            
            {
                type:"input",
                messsage:"What're the instructions to operate this application?",
                name:"Instructions"
            }

            {
                type:"list",
                message:"What packages would you like to use?",
                name:"license"
            }
        })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
