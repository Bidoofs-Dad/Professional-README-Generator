// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your repository called?",
    },
    {
        type: "input",
        name: "location",
        message: "Where do you live?",
    },
    {
        type: "input",
        name: "description",
        message: "Tell me about your repository! This will be included in the 'Description' tab of your README.",
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required to install your application, if any?",
    },
    {
        type: "input",
        name: "usage",
        message: "Please include instructions on how to use your application! You will also find a blank spot in your README below what you type here, that you can link a screenshot to.",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please include any contributions that you may have had!",
    },
    {
        type: "input",
        name: "test",
        message: "Please explain how one can test your application!",
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
