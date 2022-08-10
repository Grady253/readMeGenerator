// TODO: Include packages needed for this application
// These are my packages that are need for my application.
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
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
        message: "Please provide a breif description of project.",
        name: "description",
      },

      {
        type: "input",
        message: "How is your project installed?",
        name: "installation",
      },

      {
        type: "input",
        message: "How is your application used?",
        name: "usage",
      },

      {
        type: "input",
        message: "Did any contribute to this project? If so, who?",
        name: "credits",
      },

      {
        type: "input",
        message: "What're the instructions to operate this application?",
        name: "instructions",
      },

      {
        type: "list",
        message: "What packages would you like to use?",
        choice: ["MIT","ISC","Mozzilla","IBM"],
        name: "license",
      },

      {
        type: "input",
        message: "What's your Github?",
        name: "github",
      },

      {
        type: "input",
        message: "What's your Email?",
        name: "email",
      },
    ])
    .then((response) => {
      console.log(response);
      const readMe = markdown(response);
    }),
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./Develop/OUTPUT.md", readMe, (err) => {
    err? console.error(err): console.log("Worked!");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
