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

test('creates employee email', () => {
    const test = new Employee('Jon', 1, 'email@email.com');
    expect(test.email).toBe('email@email.com');
})

test('getId function', () => {
    const test = new Employee('Jon', 1);
    expect(test.getID()).toBe(1);
})

test('getEmail function', () => {
    const test = new Employee('Jon', 1, "email@email.com");
    expect(test.getEmail()).toBe('email@email.com');
})

test('getRole function', () => {
    const test = new Employee('Jon', 1, "email");
    expect(test.getRole()).toBe('Employee');
})

// expect(employee.name).toBe('Jon');
//     expect(player.id).toEqual(expect.any(Number));
//     expect(player.email).toEqual(expect.any(String));
//     expect(player.role).toBe('Employee');