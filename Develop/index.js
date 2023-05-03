// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "fullName",
        message: "What is your first and last name?",
      },
      {
        type: "input",
        name: "location",
        message: "Where do you live?",
      },
      {
        type: "input",
        name: "bio",
        message: "Say a little bit about yourself!",
      },
      {
        type: "input",
        name: "linkedInURL",
        message: "Include your a link to your LinkedIn!",
      },
      {
          type: "input",
          name: "gitHubURL",
          message: "Include your a link to your GitHub!",
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("portfolio.md", portfolioRequested, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
