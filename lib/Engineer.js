const Employee = require ('./Employee');

class Engineer extends Employee { 
    constructor(name, id, email, github) {
        super(name, id, email); //this will be done on the other ones as well
        this.github = github
    }

  getGithub() {
    return this.gitHub;
  }

  getRole() {
    return 'Engineer';
  }

    
}

module.exports = Engineer