const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test('creates school', () => {
    const test = new Intern('Jon', 1, "1234@1234.com", "school");
    expect(test.school).toBe('school')
})

test('getSchool', () => {
    const test = new Intern('Jon', 1, "1234@1234.com", "school");
    expect(test.getSchool()).toBe('school')
})

test('gets Role', () => {
    const test = new Intern('Jon');
    expect(test.getRole()).toBe('Intern')
})
