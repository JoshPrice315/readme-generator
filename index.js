const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questionsPrompt = () => {
    return inquirer.prompt([

        // GitHub username 
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub username (Required)",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your GitHub username!");
                    return false;
                }
            }
        },

        // User email
        {
            type: "input",
            name: "email",
            message: "Enter your email (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter your email!");
                    return false;
                }
            }
        },

        // Title of project
        {
            type: "input",
            name: "email",
            message: "Enter the title of your project (Required)",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                }
                else {
                    console.log("Please enter the title of your project!")
                    return false;
                }
            }
        },

        // Description of project
        {
            type: "input",
            name: "email",
            message: "Enter a description for your project (Required)",
            validate: desciptionInput => {
                if (desciptionInput) {
                    return true;
                }
                else {
                    console.log("Please enter a description for your project!")
                }
            }
        },

        // Installation Instructions
        {
            type: "input",
            name: "email",
            message: "Enter installation instructions (Required)",
            validate: installInput => {
                if (installInput) {
                    return true;
                }
                else {
                    console.log("Please enter installation instructions!")
                }
            }
        },

        // Project Usage
        {
            type: "input",
            name: "email",
            message: "Enter usage information for your project (Required)",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                }
                else {
                    console.log("Please enter usage information!")
                }
            }
        },

        // Contribution
        {
            type: "input",
            name: "email",
            message: "Enter contribution information (Required)",
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                }
                else {
                    console.log("Please enter contribution information!")
                }
            }
        },

        // Testing
        {
            type: "input",
            name: "email",
            message: "Please enter testing information (Required)",
            validate: testingInput => {
                if (contributionInput) {
                    return true;
                }
                else {
                    console.log("Please enter testing information!")
                }
            }
        },

        // Liscense choice

        // End of function
    ]);
}
questionsPrompt();
// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
// console.log('Hello');