const Employee = require ('./Employee');

class Manager extends Employee { 
    constructor(name, id, email, officeNumber) {
        super(name, id, email); //this will be done on the other ones as well
        this.officeNumber = officeNumber
    }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }

    
}

module.exports = Manager