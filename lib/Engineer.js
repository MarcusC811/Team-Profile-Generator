const Employee = require('./Employee');
const Inquirer = require('inquirer');
let newEng = [];
class Engineer extends Employee {
    constructor(e) {
        super(e);
        this.e = e
    }


    getGithub(e) {
        Inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your GitHub username?',
                    name: 'GitHub'
                }
            ])
            .then((answers) => {
                newEng.push(this.e, answers)
                console.log(newEng.GitHub);
            })
    }
}



module.exports = Engineer;