const Intern = require('../lib/Intern')

test('gets the interns school name', () => {
    const intern = new Intern();

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('gets the interns role', () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual(expect.any(String));
})