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
        Inquirer
        .prompt(questions)
        .then((response) => {
            if(response.role === 'Engineer') {
                Inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is your GitHub username?',
                        name: 'GitHub'
                    }
                ])  
                .then((answers) => {
                    let member = {...response, ...answers};
                    // team.push(member)
                    addTeam(member);
                })
            } else if(response.role === 'Intern') {
                Inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What school do you attend?',
                        name: 'School'
                    }
                ])
                .then((answers) => {
                    let member = {...response, ...answers};
                    // team.push(member)
                    addTeam(member);
                })
            } else if(response.role === 'Manager') {
                Inquirer
                .prompt([
                    {
                        type: 'input',
                        message: 'What is your office number?',
                        name: 'offNum'
                    }
                ])
                .then((answers) => {
                    let member = {...response, ...answers};
                    // team.push(member)
                    addTeam(member);
                })
            }
            
        })
}

function addTeam (member) {
    team.push(member);
}

function genHTML (team) {
    let content = ``
    
    fs.writeFile('index.HTML', content, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
        console.log('success')
      });
}

init();

