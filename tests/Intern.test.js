const Intern = require('../lib/Intern')

describe('Getting Engineer info', () => {
    it('Returns School', () => {
        const school = 'UofM';
        const e = this.e
        const I = new Intern(e ,school);

        expect(I.school).toEqual(school);
    })
})