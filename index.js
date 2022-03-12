const inquirer = require('inquirer');
const fs = require('fs');
let teamArr = [];

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function askManager() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the your name?',
    },
    {
      type: 'input',
      name: 'MgrID',
      message: 'What is your ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'Office',
      message: 'What is your office number?',
    },
  ])
  // ask the manager related questions - ID, Email, Office
  // store the manager in the team array
  // call the mainMenu() function
  .then(answers => { 
    teamArr.push(answers)
    console.log(teamArr)
    mainMenu()
  })
 
}

function mainMenu() {
  return inquirer.prompt([
  // prompt the user with "What would you like to do next?"
  {
    type: 'list',
    message: 'Add a new team member or build the team?',
    name: 'mgrchoice',
    choices: ["Engineer", "Intern", "Build the team!"]
  },
  // you can either add engineer, add intern or quit and build the team
])
.then((answers) => {
  if (answers.mgrchoice === "Engineer") engineerQ();
  
  if (answers.mgrchoice === "Intern") internQ();

  if (answers.mgrchoice === "Build the team!") buildTeam();
})
}

function engineerQ() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the employees name?',
    },
    {
      type: 'input',
      name: 'Title',
      message: 'What is your employees title?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your employees email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then(answers => {
    teamArr.push(answers)
    console.log(teamArr)
    mainMenu()
  })
}

function internQ() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the employees name?',
    },
    {
      type: 'input',
      name: 'Title',
      message: 'What is your employees title?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your employees email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then(answers => {
    teamArr.push(answers)
    console.log(teamArr)
    mainMenu()
  })
}


function buildTeam() {
fs.writeFileSync('index.html', generateHTML(teamArr))
console.log(teamArr)
teamArr.map(console.log(teamArr.name))
};


const generateHTML = (teamArr) => //build out the HTML and use .map to loop through the teamArr and drop the members on the page in a card. map function to append new cards per person input added.
  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
  
      <title>Document</title>
  </head>
  
  <body>
  ${teamArr.map(person => {
    return ``
  })}
      <nav class="navbar navbar-dark bg-primary justify-content-center">
          <span class="navbar-text text-white font-weight-bolder">
              My Team
          </span>
      </nav>
  
      <ul class="list-group container">
          <div class="row">
              <div class="card text-white bg-primary col-sm-2 col-md-3 col-lg-4 ml-2 mb-3 p-2 mt-2 rounded"
                  style="max-width: 18rem;" id="empCards">
                  <div class="card-header" id="personCard">
                      <h5 class="card-title"></i>Example Name</h5>
                  </div>
                  <div class="card-body" id="result-content">
                      <ul class="list-group list-group-flush">
                          <li class="list-group-item text-dark">A item</li>
                          <li class="list-group-item text-dark">A second item</li>
                          <li class="list-group-item text-dark">A third item</li>
                      </ul>
                  </div>
              </div>
      </ul>
  
  
  </body>
  
  </html>`;

askManager();

// peopleArr.map(person => {
//   return `<h1>${person.name}</h1>
// <h3>${person.age}</h3>`;
// })

//${teamArr.map()}

//break apart the HTML to create the cards with their own functions and appending them to a bootstrap container to keep it neat looking
