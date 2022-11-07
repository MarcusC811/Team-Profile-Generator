const Employee = require('./Employee');
const Inquirer = require('inquirer');
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
                let member = Object.values(this.e);
                member.push(answers.GitHub);
                console.log(member);
            })           
    }
    
}



module.exports = Engineer;