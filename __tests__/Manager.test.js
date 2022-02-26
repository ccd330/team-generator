const Manager = require('../lib/Manager');

test('returns the office number', () => {
    const manager = new Manager();

    expect(manager.officeNumber()).toEqual(expect.any(String));
})

test('returns the manager as string', () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual(expect.any(String));
})

