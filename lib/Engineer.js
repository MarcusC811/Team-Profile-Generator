const Employee = require('./Employee');
const Inquirer = require('inquirer');
class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
        this.name = name
        this.email = email
        this.id = id
        super(gitHub);
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