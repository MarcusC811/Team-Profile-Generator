const Inquirer = require('inquirer');
const Jest = require('jest');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
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
        .then((answers) => {
            if(answers.role === 'Engineer') {
                let eng = new Engineer(answers);
                eng.getGithub();
            }
        })

}
init();

// {
//     type: 'input',
//     message: 'What is their office number?',
//     name: 'manofficeNumber'
// }



// if(answers.role === 'Engineer') {
                
//     const newEng =
//     Inquirer
//      .prompt([
//         {
//             type: 'input',
//             message: 'What is your GitHub username?',
//             name: 'GitHub'
//         }
//     ])
    
//     new Promise((res, rej) => {
//         res(console.log(engQ.GitHub))
//     })
//     newEng();
// } else if(answers.role === 'Intern') {
//     const intQ = Inquirer
//      .prompt([
//         {
//             type: 'input',
//             message: 'What school do you attend?',
//             name: 'school'
//         }
//     ])
// } else if(answers.role === 'Manager') {
//     const manQ = Inquirer
//      .prompt([
//         {
//             type: 'input',
//             message: 'What is your office number?',
//             name: 'offNum'
//         }
//     ])
// }
// })