const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager")

test('creates officeNo', () => {
    const test = new Manager('Jon', 1, "1234@1234.com", 1);
    expect(test.officeNumber).toBe(1)
})

test('getOffice', () => {
    const test = new Manager('Jon', 1, "1234@1234.com", 1);
    expect(test.getOfficeNumber()).toBe(1)
})

test('gets Role', () => {
    const test = new Manager('Jon');
    expect(test.getRole()).toBe('Manager')
})
