

function generatePage(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>   
    testestest
    </body>
    </html>`


    // template literals, where I generate the team page
    // function generateEngineer(engineer) {
    //     return `
//     <div class="card">
//     <div class="container">
//         <div class="heading">
//             <h2>${engineer.name}</h2>
//             <h3>${engineer.role}</h3>
//         </div>
//         <div class="details">
//         <h4> ID: ${engineer.id}</h4>
//         <h4> Email: ${engineer.email}</h4>
//           <h4> Github: ${engineer.github}</h4>
//        </div>
//    </div>
// </div>

    }




    // const html = [];
    // html.push(team.filter(employee => employee.getRole() == "Engineer").map(engineer => generateEngineer(engineer)));
    // return html.join("")

//card for intern

//card for manager

//card for engineer

const writePage = function() {
    fs.writeFile("./dist/index.html", generatePage(employeeArr), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The HTML page has been generated!");
    });
}

module.exports = generatePage()