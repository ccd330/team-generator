const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const fs = require('fs');

var employeeOptions = [];
var role = 'Manager';

class Index {
    constructor() {
        this.index = 0;
    }
    getName(role){
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: `What is the ${role}'s name? (Required)`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log(`Please enter the ${role} name!`);
                        return false;
                    } 
                } 
            })
            .then(({ name }) => {
                this.employee = new Employee(name);
                this.getId(name,role)
            })
    }
    getId(name,role){
        inquirer
            .prompt({
                type: 'input',
                name: 'id',
                message: `What is the ${role}'s id? (Required) `,
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter an id!');
                        return false;
                    }
                } 
            })
            .then(({ id }) => {
                this.employee = new Employee(name, id);
                this.getEmail(name,id,role);
            })
    }
    getEmail(name,id,role){
        inquirer
            .prompt({
                type: 'string',
                name: 'email',
                message: `What is the ${role}'s email? (Required)`,
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter an email address!');
                        return false;
                    }
                } 
            })
            .then(({ email }) => {
                this.employee = new Employee(name, id, email);
                this.getRole(name, id, email,role)
            })
    }
    getRole(name,id,email,role){
        if(this.index === 0){
            let role = 'Manager'
            this.manager = new Manager(name, id, email, role);
            this.getOfficeNumber(name, id, email, role);
        } else {
            if (role === 'Intern'){
                this.intern = new Intern(name, id, email, role);
                this.getSchool(name, id, email, role);
            } else {
                this.engineer = new Engineer(name, id, email, role);
                this.getGithub(name, id, email, role);
                
            }

        }
    }
    getOfficeNumber(name,id,email,role){
        inquirer
            .prompt({
                type: 'input',
                name: 'number',
                message: `What is the Manager's office number? (Required)`,
                validate: numberInput => {
                    if (numberInput) {
                        return true;
                    } else {
                        console.log('Please enter an office number');
                        return false;
                    }
                } 
            })
            .then(({ number }) => {
                this.manager = new Manager(name, id, email, role, number);
                employeeOptions.push(this.manager);
                this.addEmployee(employeeOptions);
            })
    }
    getGithub(name,id,email,role){
        inquirer
            .prompt({
                type: 'input',
                name: 'github',
                message: "What is the Engineer's github username? (Required)",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log(`Please enter the Engineer's github username!`);
                        return false;
                    }
                } 
            })
            .then(({ github }) => {
                this.engineer = new Engineer(name, id, email, role, github);
                employeeOptions.push(this.engineer);
                this.addEmployee(employeeOptions);
            })
    }
    getSchool(name,id,email,role){
        inquirer
            .prompt({
                type: 'input',
                name: 'school',
                message: "What is the Intern's school? (Required)",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log(`Please enter the Intern's school or university!`);
                        return false;
                    }
                } 
            })
            .then(({ school }) => {
                this.intern = new Intern(name, id, email, role, school);
                employeeOptions.push(this.intern);
                this.addEmployee(employeeOptions);
            })
    }
    addEmployee(employees){
        inquirer
            .prompt({
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to enter another employee?',
                default: false
            })
            .then(({ confirmAddEmployee }) => {
                if (confirmAddEmployee) {
                    this.index++;
                    inquirer
                        .prompt({
                            type: 'list',
                            name: 'role',
                            message: 'What is the employee role?',
                            choices: ['Engineer','Intern']
                        })
                        .then(({ role }) => {
                            this.getName(role);
                        })
                } else {
                    writeFile(generatePage(employees));
                    console.log('Your file has been created!');
                }
            })
    }

}

new Index().getName(role)


const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your file has been created!'
            });
        });
    });
};

module.exports = Index;
