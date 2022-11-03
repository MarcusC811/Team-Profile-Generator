const Employee = require('..lib/Employee.js');

describe('Getting Employee Info', () => {
    it('Grabs name', () => {
        const name = 'Marcus';
        const Employee = new Employee(name);

        expect(Employee.name).toEqual(this.name)


    })

    it('Should be able to get email', () => {
        it('Grabs email', () => {
            const email = 'marcus@gmail.com';
            const Employee = new Employee('Marcus', email);

            expect(Employee.email).toEqual(email)
        })
    })

    it('Should be able to get id', () => {
        it('Grabs email', () => {
            const id = 123
            const Employee = new Employee('Marcus', 'marcus@gmail.com', id);

            expect(Employee.id).toEqual(id)
        })
    })

    it('Should be able to get role', () => {
        it('Grabs email', () => {
            const role = 'Manager';
            const Employee = new Employee('Marcus', 'marcus@gmail.com', '123', role);

            expect(Employee.role).toEqual(role)
        })
    })
})