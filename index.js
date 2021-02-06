const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js')
const { writeFile, copyFile } = require('./utils/generate-site.js')


const promptUser = () => {
    return inquirer.prompt([
      {
          type: 'input',
          name: 'project-title',
          message: 'What is the title of your project? (Required)',
          validate: nameInput => {
              if (nameInput) {
                  return true
              } else {
                  console.log('Please enter your name!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'project-description',
          message: 'Please give a brief description of your project (Required)',
          validate: userNameInput => {
              if (userNameInput) {
                  return true
              } else {
                  console.log('Please enter your github username!')
              }
          }
      },
      {
          type: 'input',
          name: 'installation',
          message: 'Please give installation instructions for your project (Required)',
          validate: instructionInput => {
              if (instructionInput) {
                  return true
              } else {
                  console.log('Please enter your instructions')
              }
          }
      },
      {
        type: 'input',
        name: 'contribution-guidelines',
        message: 'Please give installation instructions for your project (Required)',
        validate: instructionInput => {
            if (instructionInput) {
                return true
            } else {
                console.log('Please enter your instructions')
            }
        }
    },
    {
        type: 'input',
        name: 'test-instructions',
        message: 'Please give installation instructions for your project (Required)',
        validate: instructionInput => {
            if (instructionInput) {
                return true
            } else {
                console.log('Please enter your instructions')
            }
        }
    },

        
      {
          type: 'confirm',
          name: 'confirmAbout',
          message: 'Would you like to enter some additional information about yourself for an "About" section?',
          default: true
    },
      {
          type: 'input',
          name: 'about',
          message: 'Provide some information about yourself:',
          when: ({confirmAbout})=> {
              if(confirmAbout) {
                  return true;
              } else {
                  return false;
              }
          }
      }
    ])
}

const promptProject = portfolioData => {
    //if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }
    console.log(`
    ==============================
    Add a New Project
    ==============================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true
                } else {
                    console.log ('Please enter a valid project name!')
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescriptionInput => {
                if(projectDescriptionInput) {
                    return true
                } else {
                    console.log ('Please enter a valid project description!')
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices:['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if(linkInput) {
                    return true
                } else {
                    console.log ('Please enter a link to your project!')
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    })

};

promptUser()
    .then(promptProject)
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });