const Inquirer = require('inquirer');
const Jest = require('jest');
const fs = require('fs');
const Employee = require('./lib/Employee')
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

    let emQuestions =  
        Inquirer
        .prompt([
        {
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
        }])
        
        if(answers.role === 'Engineer') {
            const engQ = Inquirer
             .prompt([
                {
                    type: 'input',
                    message: 'What is your GitHub username?',
                    name: 'GitHub'
                }
            ])
            const newEng = (answers, engQ) => {
                team.push(answers, engQ.GitHub)
            }
            newEng();
        } else if(answers.role === 'Intern') {
            const intQ = Inquirer
             .prompt([
                {
                    type: 'input',
                    message: 'What school do you attend?',
                    name: 'school'
                }
            ])
        } else if(answers.role === 'Manager') {
            const manQ = Inquirer
             .prompt([
                {
                    type: 'input',
                    message: 'What is your office number?',
                    name: 'offNum'
                }
            ])
        }
        
        console.log(team)

}
init();

// {
//     type: 'input',
//     message: 'What is their office number?',
//     name: 'manofficeNumber'
// }



