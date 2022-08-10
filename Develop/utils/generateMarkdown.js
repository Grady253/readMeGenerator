// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license){
     return `[![License: ${license}](https://img.shields.io/badge/${license}-green.svg)]`
   }else{
     return ``
   }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === MIT){
    return `https://opensource.org/licenses/MIT`
  }

  if (license === ISC){
    return `https://opensource.org/licenses/ISC`
  }

  if(license === Mozzilla){
    return `https://opensource.org/licenses/MPL-2.0`
  }

  if (license === IBM){
    return `https://opensource.org/licenses/IPL-1.0`
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){};


function renderTheTitle (title){
  return `# ${data.title}`;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title
  ${renderTheTitle(data.title)}

 ## Description
 For this project, ${data.Description}

 ## Table of Content
 | [Installation](#installation) |
 [Usage](#usage) |
 [Credits](#credits) |
 [License](#license) |
 [Badges](#badges) |
 [Feature](#features) |
 [contributors](#contributors) |
 [test](#test) |

 ## Installation
 The steps to install the application are ${data.installation}.

 ## Usage
 ${data.usage}

 ## Credits
 My Github is: ${data.github}.
 My email is: ${data.email}.

 ## License
 ${renderLicenseSection(data.license)}

 ## Badges

 ## Features

 ## Test

`;
};

module.exports = generateMarkdown;
