// const employeeQuestions = [
//     {
//         type: 'input',
//         message: 'What is the name of this employee?',
//         name: 'Name'
//     },
//     {
//         type: 'input',
//         message: 'What is their employee ID?',
//         name: 'ID'
//     },
//     {
//         type: 'input',
//         message: 'What is their email?',
//         name: 'Email'
//     },
//     {
//         type: 'input',
//         message: 'What is their office number?',
//         name: 'officeNumber'
//     },
//     {
//         type: 'list',
//         message: 'Would you like to add an engineer or intern to your roster?',
//         choices: ['Engineer', 'Intern', 'No more members']
//     }
// ]

class Employee {
    constructor(name, email, id, role) {
        this.name = name
        this.email = email
        this.id = id
        this.role = role
    }

    getName(name){
        return name
    }

    getEmail(email) {
        return email
    }

    getId (id) {
        return id
    }

    getRole (role) {
        return role
    }
}

module.exports = Employee;