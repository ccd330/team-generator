const Intern = require('../lib/Intern')

test('creates the interns school name', () => {
    const intern = new Intern();

    expect(intern.school()).toEqual(expect.any(String));
})

test('gets the interns school name', () => {
    const intern = new Intern();

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test('returns the intern as string', () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual(expect.any(String));
})