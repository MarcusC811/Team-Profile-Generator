const Inquirer = require('inquirer');
const Jest = require('jest');
const fs = require('fs');
const Employee = require('./lib/Employee')

function init () {
    Inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the name of this employee?',
                name: 'Name'
            },
            {
                type: 'input',
                message: 'What is their employee ID?',
                name: 'ID'
            },
            {
                type: 'input',
                message: 'What is their email?',
                name: 'Email'
            },
            {
                type: 'input',
                message: 'What is their office number?',
                name: 'officeNumber'
            },
            {
                type: 'list',
                message: 'Would you like to add an engineer or intern to your roster?',
                choices: ['Engineer', 'Intern', 'No more members'],
                name: 'role'
            }])
        }

init();