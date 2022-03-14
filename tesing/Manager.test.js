const Employee = require("../profiles/Employee");
const Manager = require("../profiles/Manager");

describe('placing office number', () => {
    it('Can set office number via constructor argument', () => {
        const testValue = 100;
        const git = new Manager("Jeff", 1, "test@test.com", testValue);
        expect(git.officeNumber).toBe(testValue);
    })
});

describe('placing manager', () => {
    it('getRole() should return Manager', () => {
        const testValue = "Manager";
        const git = new Manager("Jeff", 1, "test@test.com", 100);
        expect(git.getRole()).toBe(testValue);
    })
});

describe("Can get office number via getOffice()", () => {
    it('getRole() should return Manager', () => {
        const testValue = 100;
        const git = new Manager("Jeff", 1, "test@test.com", testValue);
        expect(git.getOfficeNumber()).toBe(testValue);
    })
});