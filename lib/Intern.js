const Employee = require('./Employee');
const Inquirer = require('inquirer');

class Intern extends Employee {
    constructor(e, school) {
        super(e, school);
        this.e = e
        this.school = school
    }

    getSchool() {
        Inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What school do you attend?',
                    name: 'School'
                }
            ])
            .then((answers) => {
                let member = Object.values(this.e);
                member.push(answers.School);
                console.log(member);
            })
    }
    
}


module.exports = Intern;