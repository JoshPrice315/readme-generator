const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = () => {
    return inquirer.prompt([

        // Name
        {
            type: "input",
            name: "name",
            message: "Enter your first and last name (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter your first and last name!");
                    return false;
                }
            }
        },
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
            name: "title",
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
            name: "description",
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
            name: "installation",
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
            name: "usage",
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

        // Contributors
        {
            type: "input",
            name: "contributors",
            message: "Enter contribution information (Required)",
            validate: contributorInput => {
                if (contributorInput) {
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
            name: "testing",
            message: "Please enter testing information (Required)",
            validate: testingInput => {
                if (testingInput) {
                    return true;
                }
                else {
                    console.log("Please enter testing information!")
                }
            }
        },

        // License choice
        {
            type: "list",
            name: "license",
            message: "Choose a license to use (Required)",
            choices: ["GNU AGPLv3", "GNU GPLv3", "GNY LGPLv3", "Mozzila Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0"],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    return false;
                }

            }
        },
        // End of function
    ]);
}
// function to create README file
const writeFile = data => {
    fs.writeFile("README.md", data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been generated!")
        }
    })
};

// function to start program
questions()
    .then(answers => {
        return generateReadme(answers);
    })
    .then(data => {
        return writeFile(data);
    })
    .catch(err => {
        console.log(err)
    })