const Employee = require ('./Employee');

class Intern extends Employee { 
    constructor(name, id, email, school) {
        super(name, id, email); //this will be done on the other ones as well
        this.school = school
    }

  getSchool() {
    return this.school;
  }

  getRole() {
    return 'Intern';
  }

    
}

module.exports = Intern