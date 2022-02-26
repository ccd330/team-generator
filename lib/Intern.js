const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name = 'Claudia',id = '1',email="claudiacdavis@gmail.com", role = "Employee", school = "") {
        super(name,id,email,role);
        this.school = school;
        this.role = 'Intern';
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Intern;