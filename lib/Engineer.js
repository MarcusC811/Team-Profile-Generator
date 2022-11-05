const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
    }


    getRole () {
        return 'Engineer'
    }
}



module.exports = Engineer;