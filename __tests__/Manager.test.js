const Employee = require('../lib/Manager');
jest.mock('../lib/Manager');

test('creates an manager object', () => {
    const employee = new Employee('Claudia', '1', 'claudiacdavis@gmail.com', 'Employee');

    expect(employee.name).toBe('Claudia');
    expect(employee.id).toEqual(expect.any(string));
    expect(employee.email).toEqual(expect.any(string));
    expect(employee.role).toBe('Employee');

});

test('gets an employees name', () => {
    const employee = new Employee('Claudia')

    expect(employee.getName()).toBe('Claudia');
});

test('gets an employees id', () => {
    const employee = new Employee('Claudia')

    expect(employee.getId()).toEqual(expect.any(String));
});

test('gets an employees email', () => {
    const employee = new Employee('Claudia')

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('returns the employee as string', () => {
    const employee = new Employee('Claudia');

    expect(employee.getRole()).toEqual(expect.any(String));
})

test('returns the office number', () => {
    const manager = new Manager();

    expect(manager.officeNumber()).toEqual(expect.any(String));
})

test('returns the manager as string', () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual(expect.any(String));
})