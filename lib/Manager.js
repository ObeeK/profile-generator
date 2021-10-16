const Employee = require ('./Employee');

class Manager extends Employee { 
    constructor(name, id, email, officeNu) {
        super(name, id, email); //this will be done on the other ones as well
        this.officeNu = officeNu
    }

  getOfficeNu() {
    return this.officeNu;
  }

  getRole() {
    return 'Manager';
  }

    
}