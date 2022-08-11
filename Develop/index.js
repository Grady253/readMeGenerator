// TODO: Include packages needed for this application
// These are my packages that are need for my application.
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
const path = require('path');

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  const questions = [
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the title of your project?",
          name: "title",
        },
  
        {
          type: "input",
          message: "Please provide a breif description of the project.",
          name: "description",
        },
  
        {
          type: "input",
          message: "How do you install the project?",
          name: "installation",
        },
  
        {
          name: "usage",
          type: "input",
          message: "How is your application used?",
        },
  
        {
          name: "credits",
          type: "input",
          message: "Did any contribute to this project? If so, who?",
        },
  
        {
          name: "instructions",
          type: "input",
          message: "What're the instructions to operate this application?",
        },
  
        {
          name: "github",
          type: "input",
          message: "What's your Github username?",
        },
  
        {
          name: "email",
          type: "input",
          message: "please provide your Email.",
        },
  
        {
          name: "license",
          type: "list",
          message: "What license would you like to use?",
          choices: ["MIT","ISC","Mozzilla","IBM"],
        }
      ])
      .then((response) => {
        console.log(response);
        writeToFile('./output/README.md',markdown(response));
       console.log('Success!!!!!!');
      }),
  ];
}

// Function call to initialize app
init();
