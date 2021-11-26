const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee")

test('creates an employee object', () => {
    const test = new Employee('Jon');
    expect(typeof(test)).toBe('object')
})

test('creates employee name', () => {
    const test = new Employee('Jon');
    expect(test.name).toBe('Jon');
})

test('creates employee id', () => {
    const test = new Employee('Jon', 1);
    expect(test.id).toBe(1);
})

test('getName function', () => {
    const test = new Employee('Jon');
    expect(test.getName()).toBe('Jon');
})


// expect(employee.name).toBe('Jon');
//     expect(player.id).toEqual(expect.any(Number));
//     expect(player.email).toEqual(expect.any(String));
//     expect(player.role).toBe('Employee');