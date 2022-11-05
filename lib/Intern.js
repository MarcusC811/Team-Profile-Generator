const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, email, id, gitHub) {
    }


    getRole () {
        return 'Intern'
    }
}


module.exports = Intern;