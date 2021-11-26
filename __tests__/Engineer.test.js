const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer")

test('creates github', () => {
    const test = new Engineer('Jon', 1, "1234@1234.com", "github");
    expect(test.github).toBe('github')
})

test('getGithub', () => {
    const test = new Engineer('Jon', 1, "1234@1234.com", "github");
    expect(test.getGithub()).toBe('github')
})

test('gets Role', () => {
    const test = new Engineer('Jon');
    expect(test.getRole()).toBe('Engineer')
})
