const generatePage = employeesArr => {
    return `
        <section>
            <div>
            ${employeesArr
                .filter(({ role }) => role ==='Manager')
                .map(({ name, id, email, role, number }) => {
                    return `
                        <div>
                            <div>
                                <h3>${name}</h3>
                                <h5>${role}</h5>
                            </div>
                            <ul>
                                <li>ID: ${id}</li>
                                <li>Email: <a href="mailto:${email}">${email}</a></li>
                                <li>Office Number: ${number}</li>
                                </ul>
                        </div>
                    `;
                })
            .join('')}
        ${employeesArr
            .filter(({ role }) => role === 'Engineer')
            .map(({ name, id, email, role, github }) => {
                return `
                    <div>
                        <div>
                            <h3>${name}</h3>
                            <h5> ${role}</h5>
                        </div>
                        <ul>
                            <li>ID: ${id}</li>
                            <li>Email: <a href="mailto:${email}">${email}</a></li>
                            <li>Github: <a href="https://github.com/${github}">${github}</a></li>
                        </ul>
                    </div>
                `;
            })
            .join('')}
            ${employeesArr
            .filter(({ role }) => role === 'Intern')
            .map(({ name, id, email, role, school }) => {
                return `
                    <div>
                        <div>
                            <h3>${name}</h3>
                            <h5> ${role}</h5>
                        </div>
                        <ul>
                            <li>ID: ${id}</li>
                            <li>Email: <a href="mailto:${email}">${email}</a></li>
                            <li>School: ${school}</li>
                        </ul>
                    </div>
                `;
            })
            .join('')}
        </div>
        </section>
    `;
};

module.exports = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>My Team</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <header>
            <div>
                <h1>My Team</h1>
            </div>
        </header>
        <main>
            ${generatePage(templateData)}
        </main>
    </body>
    </html>
    `;
};