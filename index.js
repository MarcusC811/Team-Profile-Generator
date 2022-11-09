// Dependencies
const Inquirer = require('inquirer');
const Jest = require('jest');
const fs = require('fs');
// Class Libraries
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let team = [];

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
                    addTeam(member);
                })
            }
            
        })
}

function addTeam (member) {
    team.push(member);

    Inquirer
    .prompt([
        {
            type: 'list',
            message: 'Would you like to add an employee?',
            choices: ['Yes', 'No'],
            name: 'YNEmployee'
        }
    ])
    .then((answers) => {
        if(answers.YNEmployee === 'Yes') {
            init();
        } else if(answers.YNEmployee === 'No') {
            genHTML(team);
        }
    })
}

function genHTML (team) {
    let content = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        <main class="addtome">
              <div class="card" style="width: 18rem;">
                  <div class="card-header">
                    <p>${team[0].Name}</p>
                    <p>${team[0].role}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${team[0].ID}</li>
                    <li class="list-group-item"><a href = "mailto: ${team[0].Email}">${team[0].Email}</a> </li>
                    <li class="list-group-item">Office Number: ${team[0].offNum}</a></li>
                  </ul>
              </div>

              <div class="card" style="width: 18rem;">
                  <div class="card-header">
                    <p>${team[1].Name}</p>
                    <p>${team[1].role}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${team[1].ID}</li>
                    <li class="list-group-item"><a href = "mailto: ${team[1].Email}">${team[1].Email}</a> </li>
                    <li class="list-group-item">GitHub: <a href = "https://github.com/${team[1].GitHub}">${team[1].GitHub}</a></li>
                  </ul>
              </div>

              <div class="card" style="width: 18rem;">
                  <div class="card-header">
                    <p>${team[2].Name}</p>
                    <p>${team[2].role}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${team[2].ID}</li>
                    <li class="list-group-item"><a href = "mailto: ${team[2].Email}">${team[2].Email}</a> </li>
                    <li class="list-group-item">School: ${team[2].School}</li>
                  </ul>
              </div>
        </main>
    </body>
    </html>`
    
    fs.writeFile('index.HTML', content, err => {
        if (err) {
          console.error(err);
        }
        console.log('success')
      });
}

init();

