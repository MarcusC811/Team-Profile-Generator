// Dependencies
const Inquirer = require('inquirer');
const Jest = require('jest');
const fs = require('fs');
// Class Libraries
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let questions = [{
    type: 'input',
    message: 'What is your name?',
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
}]

function init () {
    let team = []

        Inquirer
        .prompt(questions)
        .then((answers) => {
            if(answers.role === 'Engineer') {
                let eng = new Engineer(answers);
                eng.getGithub();
            } else if(answers.role === 'Intern') {
                let int = new Intern(answers)
                int.getSchool();
            } else if(answers.role === 'Manager') {
                let man = new Manager(answers);
                man.getOff();
            }
        })
}
init();