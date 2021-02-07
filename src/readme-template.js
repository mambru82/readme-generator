//create the about section
const generateLicense = licenseArr=> {
 const licensePrompt = licenseArr.map((x) => `${x}`)
 return `The following licenses are needed: ${licensePrompt.join(', ')}`
}

const generateLicenseIcons = licenseArr=> {
    const licensePrompt = licenseArr.map((x) => `${x}`)
    return `The following licenses are needed: ${licensePrompt.join(', ')}`
   }
   

// const generateProjects = projectsArr => {
//     //get array of just featured projects
//     const featuredProjects = projectsArr.filter(project => {
//         if(project.feature) {
//             return true;
//         } else {
//             return false;
//         }
//     });

//     //get array of non-featured projects
//     const nonFeaturedProjects = projectsArr.filter(project => {
//         if(!project.feature) {
//             return true;
//         } else {
//             return false
//         }
//     });

//     const featuredProjectHtmlArr = featuredProjects.map(({ name, description, languages, link }) => {
//         return `
//         <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//             <h3 class="portfolio-item-title text-light">${name}</h3>
//             <h5 class="portfolio-languages">
//                 Built with:
//                 ${languages.join(',')}
//             </h5>
//             <p>${description}</p>
//             <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//         </div>
//         `;
//     })

//     const nonFeaturedProjectHtmlArr = nonFeaturedProjects.map(({ name, description, languages, link }) => {
//         return `
//         <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//             <h3 class="portfolio-item-title text-light">${name}</h3>
//             <h5 class="portfolio-languages">
//                 Built with:
//                 ${languages.join(',')}
//             </h5>
//             <p>${description}</p>
//             <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//         </div>
//         `;
//     })

//     return `
//     <section class="my-3" id="portfolio">
//         <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//         <div class="flex-row justify-space-between">
//         ${featuredProjectHtmlArr.join('')}
//         ${nonFeaturedProjectHtmlArr.join('')}
//             <!-- Leaving this empty as we'll dynamically insert project HTML -->
//         </div>
//     </section>
//     `;
// };
module.exports = templateData => {
    console.log(templateData);
    const {username, email, title, description, installation, usage, contribution, testing, license} = templateData;
    return `
   # ${title}
   ${generateLicenseIcons(license)}

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
