//create the about section
const generateLicenseIcons = licenseArr=> {
 const licenseIcon = licenseArr.map((x) => {
    if (x==='Apache'){ 
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`}
    else if (x==='Mozilla_Public') {
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`}
    else return false;
    }) 
   
 return `${licenseIcon.join(', ')}`
}

const generateLicense = licenseArr=> {
    const licensePrompt = licenseArr.map((x) => `${x}`)
    return `The following licenses are needed: ${licensePrompt.join(', ')}`
   }
   


module.exports = templateData => {
    console.log(templateData);
    const {username, email, title, description, installation, usage, contribution, testing, license} = templateData;
    return `
   # ${title} ${generateLicenseIcons(license)}
   
   ## Table of Contents
   1. [Description](#Project-Description)
   1. [Installation](#Installation-instructions)
   1. [Usage](#Usage-Information)
   1. [Contributing](#Contribution-Guidelines)
   1. [Tests](#Tests)
   1. [License](#License-info)
   1. [Questions](#Questions)

   ## Project Description
   - ${description}
   ## Installation instructions:
   ${installation}
   ## Usage Information
   ${usage}
   ## Contribution Guidelines
   ${contribution}
   ## Tests
   ${testing}
   ## License-info
   ${generateLicense(license)}
   ## Questions
   If you have any questions, feel free to reach me at ${email} or via my [Github](https://github.com/${username}) profile 
  
   ### ${new Date().getFullYear()} by ${username}
     `
};
