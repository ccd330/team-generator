const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name = 'Claudia',id = '1',email="claudiacdavis@gmail.com", role = "Employee", github = 'ccd330') {
        super(name,id,email,role);
        this.github = github;
        this.role = 'Engineer';
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Engineer;