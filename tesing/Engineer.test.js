const Employee = require('../profiles/Employee');
const Engineer = require('../profiles/Engineer');

describe('Updating Values', () => {
    it('Github accounts updates with the constructor value', () => {
        const testValue = "GitHub";
        const git = new Engineer("Jeff", 1, "test@test.com", testValue);
        expect(git.github).toEqual(testValue);
    })
});

describe('Replace role', () => {
    it('getRole() should return Engineer', () => {
        const testValue = "Engineer";
        const git = new Engineer("Jeff", 1, "test@test.com", "GitHub");
        expect(git.getRole()).toEqual(testValue);
    })
});

describe('placing GitHub Username', () => {
    it("Can get GitHub username via getGithub()", () => {
        const testValue = "GitHubUser";
        const git = new Engineer("Jeff", 1, "test@test.com", testValue);
        expect(git.getGithub()).toEqual(testValue);
    })
});