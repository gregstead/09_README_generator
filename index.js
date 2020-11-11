const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        name: 'github_username',
        message: 'What is yout gitHub username?',
        default: 'gregstead',

    },
    // {
    //     name: '',
    //     message: '',
    //     default: '',

    // }
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
