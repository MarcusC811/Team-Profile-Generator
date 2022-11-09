const Engineer = require('../lib/Engineer')

describe('Getting Engineer info', () => {
    it('Returns GitHub', () => {
        const name = 'Marcus';
        const email = 'marcus@gmail.com';
        const id = 123;
        const gitHub = 'MarcusC811';
        const e = new Engineer(name, email, id, gitHub);

        expect(e.gitHub).toEqual(gitHub);
    })
})