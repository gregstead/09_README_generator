const fs = require("fs");
const inquirer = require("inquirer");
const generateMd = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    name: "title",
    message: "What is the project title?",
  },
  {
    name: "github",
    message: "What is your github username?",
    default: "gregstead",
  },
  {
    name: "description",
    message: "Describe the project",
  },
  {
    name: "installation",
    message: "How can users install the project?",
    default: "",
  },
  {
    name: "usage",
    message: "Explain how to use the project...",
    default: "",
  },
  {
    type: "list",
    name: "license",
    message: "",
    choices: ["None", "MIT", "other"],
  },
  {
    name: "contribute",
    message: "How can developers contribute to the project?",
    default: "",
  },
  {
    name: "tests",
    message: "Test instructions...",
    default: "",
  },
  {
    name: "email",
    message: "What is your email address?",
    default: "gregstead@gmail.com",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`${fileName} saved.`);
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile(answers.title + "_README.md", generateMd(answers));
  });
}

// function call to initialize program
init();
