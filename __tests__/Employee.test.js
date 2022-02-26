const Employee = require('../lib/Employee');
jest.mock('../lib/Employee');

test('creates an employee object', () => {
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

    