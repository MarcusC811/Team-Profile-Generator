// Dependencies
const Inquirer = require('inquirer');
const Jest = require('jest');
const fs = require('fs');
// Class Libraries
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let team = []

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
},
{
    type: 'list',
    message: 'What is your role?',
    choices: ['Manager', 'Engineer', 'Intern', 'No more members'],
    name: 'role'
}]


function init () {

    let member = {};

        let employeeQuestions = Inquirer
        .prompt(questions)
        .then((response) => {
            if(response.role === 'Engineer') {
                const eQuest = Inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is your GitHub username?',
                        name: 'GitHub'
                    }
                ])  
                .then((answers) => {
                    console.log(this.response, employeeQuestions)
                })
                
            } 
            
        })
}

function getGithub() {
    Inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'GitHub'
            }
        ])           
}
init();

// else if(answers.role === 'Intern') {
            //     let int = new Intern(answers)
            //     int.getSchool();
            // } else if(answers.role === 'Manager') {
            //     let man = new Manager(answers);
            //     man.getOff();
            // }