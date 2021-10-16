

const generatePage = function (data) {
    const htmlLayout = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <    
    </body>
    </html>`


    // template literals, where I generate the team page
    function generateEngineer(engineer) {
        return `
    <div class="card">
        <div class="container">
            <div class="heading">
                <h2>${engineer.name}</h2>
                <h3>${engineer.role}</h3>
            </div>
            <div class="details">
            <h4> ID: ${engineer.id}</h4>
            <h4> Email:
    `

    }

    const html = [];
    html.push(team.filter(employee => employee.getRole() == "Engineer").map(engineer => generateEngineer(engineer)));
    return html.join("")
}
//card for intern

//card for manager

//card for engineer