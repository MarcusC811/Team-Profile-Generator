const Employee = require('../lib/Employee')

describe('Getting Employee Info', () => {
    it('Grabs employee basics', () => {
        const name = 'Marcus';
        const email = 'marcus@gmail.com';
        const id = 123;
        const e = new Employee(name, email, id);

        expect(e.name).toEqual(name);
        expect(e.email).toEqual(email);
        expect(e.id).toEqual(id);
    })
})