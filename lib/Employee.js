
class Employee {
    constructor(name = 'Claudia', id='1', email='claudiacdavis@gmail.com', role='Employee') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }
}

module.exports = Employee