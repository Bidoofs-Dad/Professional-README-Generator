// TODO: Create a function that returns a license badge based on which license is passed in
let badgeLink = "";
let licenseLink = "";
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (data.license === "None"){
//     badgeLink = "";
//   }
//   if (data.license === "Mozilla Public License 2.0"){
//     badgeLink = "https://img.shields.io/badge/License-mpl--2.0-orange";
//   }
//   if (data.license === "Apache License 2.0"){
//     badgeLink = "https://img.shields.io/badge/License-apache--2.0-green";
//   }
//   if (data.license === "MIT License"){
//     badgeLink = "https://img.shields.io/badge/License-mit-red";
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (data.license === "None"){
//     licenseLink = "";
//   }
//   if (data.license === "Mozilla Public License 2.0"){
//     licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
//   }
//   if (data.license === "Apache License 2.0"){
//     licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
//   }
//   if (data.license === "MIT License"){
//     data.license = "https://choosealicense.com/licenses/mit/";
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.license === "None"){
    let badgeLink = "";
    let licenseLink = "";
  }
  if (data.license === "Mozilla Public License 2.0"){
    badgeLink = "https://img.shields.io/badge/License-mpl--2.0-orange";
    licenseLink = "https://choosealicense.com/licenses/mpl-2.0/";
  }
  if (data.license === "Apache License 2.0"){
    badgeLink = "https://img.shields.io/badge/License-apache--2.0-green";
    licenseLink = "https://choosealicense.com/licenses/apache-2.0/";
  }
  if (data.license === "MIT License"){
    badgeLink = "https://img.shields.io/badge/License-mit-red";
    licenseLink = "https://choosealicense.com/licenses/mit/"
  }
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ![badge]${data.badgelink}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
     ![-YOUR PROJECT NAME](-LINK TO YOUR SCREENSHOT-)
  
  ## Credits
  
  ${data.contribution}
  
  ## Questions
  
  If you have any further questions, or would like to get ahold of me, contact me below!
  
  * GitHub: ${data.username}
  
  * Email: ${data.email}
  
  ## License
  
  For more information about the license that was used, follow the link below!
  
  ${licenseLink}
  
  ---
  `
  };

module.exports = generateMarkdown;
