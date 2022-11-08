const Employee = require('./Employee');
const Inquirer = require('inquirer');

class Manager extends Employee {
    constructor(e) {
        super(e)
        this.e = e;
    }


    getOff() {
        Inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your office number?',
                    name: 'offNum'
                }
            ])
            .then((answers) => {
                let member = Object.values(this.e);
                member.push(answers.offNum);
                console.log(member);
            })
    }
}

module.exports = Manager;