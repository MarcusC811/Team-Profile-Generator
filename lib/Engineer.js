const Employee = require('./Employee');
const Inquirer = require('inquirer');
class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
        super(name, email, id);
        this.gitHub = gitHub;
    }

    getRole () {
        return 'Engineer'
    }

    getGithub(){
        return this.github
    }
    
}

module.exports = Engineer;