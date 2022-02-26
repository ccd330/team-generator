const Employee = require("./Employee");
//make manager a child of employee
class Manager extends Employee{
    constructor(name = 'Claudia',id = '1',email="claudiacdavis@gmail.com", role = "Employee", number ='2') {
        super(name,id,email,role);
        this.number = number;
        this.role = 'Manager';
    }
    officeNumber(){
        return this.number;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Manager;