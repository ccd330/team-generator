const Engineer = require('../lib/Engineer');

test('gets an engineers github username', () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String));
})

test('gets an engineers github', () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('gets the engineers role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual(expect.any(String));
})