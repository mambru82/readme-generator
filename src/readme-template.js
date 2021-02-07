//create the about section
const generateLicenseIcons = licenseArr=> {
 const licenseIcon = licenseArr.map((x) => {
    if (x==='Apache'){ 
            return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`}
    else if (x==='Mozilla_Public') {
            return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`}
    else if (x==='MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`}
    else if (x==='IBM_public') {
        return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`}
    else if (x==='Eclipse') {
        return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
    } else return false;
    }) 
 return `${licenseIcon.join(' ')}`
}

const generateLicense = licenseArr=> {
    const licenseLink = licenseArr.map((x) => {
        if (x==='Apache'){ 
                return `[${x}](https://opensource.org/licenses/Apache-2.0)`}
        else if (x==='Mozilla_Public') {
                return `[${x}](https://opensource.org/licenses/MPL-2.0)`}
        else if (x==='MIT') {
            return `[${x}](https://opensource.org/licenses/MIT)`}
        else if (x==='IBM_public') {
            return `[${x}](https://opensource.org/licenses/IPL-1.0)`}
        else if (x==='Eclipse') {
            return `[${x}](https://opensource.org/licenses/EPL-1.0)`
        } else return false;
        }) 
     return `${licenseLink.join(', ')}`
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
   - This product is governed by the following license agreements. 
   - Follow the appropriate links for further information:
        - ${generateLicense(license)}
   ## Questions
   If you have any questions, feel free to reach me at ${email} or via my [Github](https://github.com/${username}) profile 
  
   ### ${new Date().getFullYear()} by ${username}
     `
};
