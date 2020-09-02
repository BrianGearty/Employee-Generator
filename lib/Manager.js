// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Getting the same questions for all from Employee.js
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    
}

module.exports = Manager;