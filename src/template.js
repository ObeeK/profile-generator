function engineerHTML(engineer) {
    return `
    <div class="card col-3">
    <div class="card-body">
            <div class="card-header bg-primary">
            <h4 class="card-title text-white">${engineer.name}</h4>
            </div>
            <h5 class="card-subtitle">${engineer.getRole()}</h5>
    <ul class="details">
    <li> ID: ${engineer.id}</li>
    <li> Email: ${engineer.email}</li>
      <li> Github: ${engineer.github}</li>
   </ul>
</div>
</div>
`
}

function managerHTML(manager) {
    return `
    <div class="card col-3">
    <div class="card-body">
            <div class="card-header bg-primary">
            <h4 class="card-title text-white">${manager.name}</h4>
            </div>
            <h5 class="card-subtitle">${manager.getRole()}</h5>
    <ul class="details">
    <li> ID: ${manager.id}</li>
    <li> Email: ${manager.email}</li>
    <li> Office Number: ${manager.officeNumber}</li>
   </ul>
</div>
</div>
`
}

function internHTML(intern) {
    return `
    <div class="card col-3">
<div class="card-body">
        <div class="card-header bg-primary">
        <h4 class="card-title text-white">${intern.name}</h4>
        </div>
        <h5 class="card-subtitle">${intern.getRole()}</h5>
    <ul class="details">
    <li>ID: ${intern.id}</li>
    <li> Email: ${intern.email}</li>
      <li> School: ${intern.school}</li>
   </ul>
</div>
</div>
`
}
const generateTeam = (employees) =>{
    // team.filter(data => console.log(data.getRole()))
    let managers = employees.filter(data => data.getRole() === 'Manager')
    .map(manager => managerHTML(manager));

    let engineers = employees.filter(data => data.getRole() === 'Engineer')
    .map(engineer => engineerHTML(engineer)).join("");
    
    let interns = employees.filter(data => data.getRole() === 'Intern')
    .map(intern => internHTML(intern)).join("");

    let totalHTML = managers[0] + engineers + interns;
    return totalHTML;
    
};



function generatePage(employees) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>My Team</title>
    </head>
    <body>   
    <header class="jumbo"> <h1> My Team </h1> </header>
    <div class="container-fluid">
    <div class="row">
    ${generateTeam(employees)}
    </div>
    </div>
    </body>
    </html>`

    }




    // const html = [];
    // html.push(team.filter(employee => employee.getRole() == "Engineer").map(engineer => generateEngineer(engineer)));
    // return html.join("")

//card for intern

//card for manager

//card for engineer



module.exports = generatePage