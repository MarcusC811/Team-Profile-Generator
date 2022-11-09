const Manager = require('../lib/Manager')

describe('Getting Engineer info', () => {
    it('Returns School', () => {
        const e = '123'
        const M = new Manager(e);

        expect(M.e).toEqual(e);
    })
})