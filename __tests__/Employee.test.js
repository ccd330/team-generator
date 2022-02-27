const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Claudia', '1', 'claudiacdavis@gmail.com', 'Employee');

    expect(employee.name).toBe('Claudia');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
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

test('gets the employees role', () => {
    const employee = new Employee('Claudia');

    expect(employee.getRole()).toEqual(expect.any(String));
})

    