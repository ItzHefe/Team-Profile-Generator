const Employee = require('../profiles/Employee');
const Intern = require("../profiles/Intern");

describe('updating values', () => {
    it('Can set school via constructor', () => {
        const testValue = "UGA";
        const git = new Intern("Jeff", 1, "test@test.com", testValue);
        expect(git.school).toEqual(testValue);
    })
});

describe('replacing role', () => {
    it('getRole() should return Intern', () => {
        const testValue = "Intern";
        const git = new Intern("Jeff", 1, "test@test.com", "UCLA");
        expect(git.getRole()).toEqual(testValue);
    })
});

describe('placing school', () => {
    it('can get school via getSchool()', () => {
        const testValue = "UGA";
        const git = new Intern("Jeff", 1, "test@test.com", testValue);
        expect(git.getSchool()).toEqual(testValue);
    })
});