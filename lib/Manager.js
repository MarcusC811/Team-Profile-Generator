const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, email, id, gitHub) {
        super(gitHub)
        this.gitHub = gitHub
    }


    getRole () {
        return 'Manager'
    }
}

module.exports = Manager;