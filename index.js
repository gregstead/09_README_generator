const fs = require('fs');
const inquirer = require('inquirer');


// array of questions for user
const questions = [
    {
        name: 'github_username',
        message: 'What is yout gitHub username?',
        default: 'gregstead',

    },
    {
        name: 'project_title',
        message: 'What is the project title?',
    },
    {
        name: 'project_description',
        message: 'Describe the project'
    },
    {
        name: 'contribution_guidelines',
        message: 'How can developers contribute to the project?',
        default: '',

    },
    {
        type: 'list',
        name: 'license',
        message: '',
        choices: [
            'None',
            'MIT',
            'other',
        ],

    },
    {
        name: 'test_instructions',
        message: 'Test instructions',
        default: '',

    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log('answers');
        })

}

// function call to initialize program
init();
