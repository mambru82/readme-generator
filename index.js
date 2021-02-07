const inquirer = require('inquirer');
const generatePage = require('./src/readme-template.js')
const writeFile = require('./utils/generate-file.js')


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?',
            validate: nameInput => {
                if(nameInput) {
                    return true
                } else {
                    console.log ('Please enter a username')
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if(emailInput) {
                    return true
                } else {
                    console.log('Please enter a valid email')
                    return false
                }
            }
        },
      {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project? (Required)',
          validate: nameInput => {
              if (nameInput) {
                  return true
              } else {
                  console.log('Please enter your project title!');
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'description',
          message: 'Please give a brief description of your project (Required)',
          validate: userNameInput => {
              if (userNameInput) {
                  return true
              } else {
                  console.log('Please enter a brief description of your project')
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
          name: 'usage',
          message: 'Please give a brief description of usage criteria...',
          validate: usageInput => {
              if (usageInput) {
                  return true
              } else {
                  console.log('Plesae enter usage criteria')
              }
          }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please give contribution guidelines for your project (Required)',
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
        name: 'testing',
        message: 'Please give test instructions for your project (Required)',
        validate: instructionInput => {
            if (instructionInput) {
                return true
            } else {
                console.log('Please enter your instructions')
            }
        }
    },

    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select any and all applicable licenses for this project? (Check all that apply)',
        choices:['Apache', 'MIT', 'Mozilla_Public', 'IBM_public', 'Eclipse']
    },

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
    .then(promptUserResponse => {
        return generatePage(promptUserResponse);
    })
    .then(readmePage => {
        console.log(readmePage);
        return writeFile(readmePage);
    })
