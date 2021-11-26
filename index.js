const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')

const generatePage = require('./src/template')


// prompt for engineer's info, then create new instance of engineer with that info

//array of employees
const employeeArr = []


//manager prompt first, then do you want to create an engineer/intern/quit

//engineer inquirer prompt
const engineerFunction = function () {  //copy all of this for intern

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is their name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their ID?',
                validate: answer => {
                    const checker = employeeArr.find(employee => { employee.id == answer })
                    if (!checker) {
                        return true;
                    } else {
                        return 'This ID already exists';
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?'
            },
            {
                type: 'input',
                name: 'gitHub',
                message: 'What is their GitHub?'
            },
        ])

        .then(response => {
            const createEngineer = new Engineer(response.name, response.id, response.email, response.gitHub);
            employeeArr.push(createEngineer);
            createTeam()
        })

};

const internFunction = function () {  

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is their name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their ID?',
                validate: answer => {
                    const checker = employeeArr.find(employee => { employee.id == answer })
                    if (!checker) {
                        return true;
                    } else {
                        return 'This ID already exists';
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email?'
            },
            {
                type: 'input',
                name: 'school',
                message: 'What school do they attend?'
            },
        ])

        .then(response => {
            const createIntern = new Intern(response.name, response.id, response.email, response.school);
            employeeArr.push(createIntern);
            createTeam()
        })

}

const managerFunction = function () {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is your ID?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email?'
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is your office number?'
            },

        ])

        .then(response => {
            const createManager = new Manager(response.name, response.id, response.email, response.office);
            // let x = Object.assign({}, createManager);
            // x.role = 'Manager';
            // employeeArr.push(x);
            employeeArr.push(createManager);
            createTeam()
        })
}

const createTeam = function () {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'createEmployee',
                message: 'What kind of employee would you like to make?',
                choices: [
                    'Engineer',
                    'Intern',
                    'Finished'
                ]

            }
        ]).then(response => {
            switch (response.createEmployee) {
                case 'Engineer':
                    engineerFunction();
                    break;
                case 'Intern':
                    internFunction();
                    break;
                case 'Finished':
                    writePage()
                    break;
            }
        })
}


managerFunction()

const writePage = function() {
    fs.writeFile("./dist/index.html", generatePage(employeeArr), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The HTML page has been generated!");
    });
}



// inquirer prompts (for each individual class, 
// + question for "do you want to make an intern/engineer/etc/quit")


// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?'
//         }
//     ])


// TODO: Create a function to write HTML file
// function writeToFile(fileName, data) {
//     fs.writeFileSync(('./dist/index.html', fileName), data)
// }

