// TODO: Create a function that returns a license badge based on which license is passed in
let badgeLink = "";
let licenseLink = "";
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === "None"){
    badgeLink = "";
  }
  if (data.license === "Mozilla Public License 2.0"){
    badgeLink = "https://img.shields.io/badge/License-mpl--2.0-orange";
  }
  if (data.license === "Apache License 2.0"){
    badgeLink = "https://img.shields.io/badge/License-apache--2.0-green";
  }
  if (data.license === "MIT License"){
    badgeLink = "https://img.shields.io/badge/License-mit-red";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === "None"){
    licenseLink = "";
  }
  if (data.license === "Mozilla Public License 2.0"){
    licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
  }
  if (data.license === "Apache License 2.0"){
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
  }
  if (data.license === "MIT License"){
    licenseLink = "https://choosealicense.com/licenses/mit/";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  inquirer.prompt(portfolio).then((response) => {
    const portfolioRequested = ``})
  return `# ${data.title}`
  };

// module.exports = generateMarkdown;
