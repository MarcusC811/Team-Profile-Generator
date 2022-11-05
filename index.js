const Inquirer = require('inquirer');
const Jest = require('jest');
const fs = require('fs');
const Employee = require('./lib/Employee')

function init () {
    Inquirer
        .prompt([
            {
                type: 'input',
                message: 'Who is the manager of this team?',
                name: 'manName'
            },
            {
                type: 'input',
                message: 'What is their employee ID?',
                name: 'manID'
            },
            {
                type: 'input',
                message: 'What is their email?',
                name: 'manEmail'
            },
            {
                type: 'input',
                message: 'What is their office number?',
                name: 'manofficeNumber'
            },
            {
                type: 'list',
                message: 'Would you like to add an engineer or intern to your roster?',
                choices: ['Engineer', 'Intern', 'No more members'],
                name: 'role'
            }])
        }

init();