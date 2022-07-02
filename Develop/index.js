// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the Project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                return true;
            } else {
                console.log('Please enter title');
                return false;
            }
        }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the Project',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter description of Project');
                    return false;
                }
        }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you instal your project? (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('You need to provide installation info!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this project? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide information on how to use project!')
                    return false;
                }
            }        
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'Choose a License (Required)',
            choices: ['MIT', 'GNU'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    console.log('Please pick a license for the project!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Contribution',
            messafety: 'How should you contribute to this project (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please provide information on how to contribute to use this project!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'How to test this project (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please describe how to test this project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github', 
            message: 'Enter your github username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email (Optional)',
        },

    ];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
            console.log('Info transferred to the README file successfully!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
    // This will call the questions function
    writeToFile("README.md", generateMarkdown(userInput));
    
    });
    
};
//questions();
// Function call to initialize app
init();