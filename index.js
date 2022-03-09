const inquirer = require('inquirer');
const fs = require('fs');
let teamArr = [];

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
    mainMenu()
  })
}

function buildTeam() {
  fs.writeFileSync('index.html', generateHTML(teamArr))
};


const generateHTML = (teamArr) => //build out the HTML and use .map to loop through the teamArr and drop the members on the page in a card. map function to append new cards per person input added.
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  ${teamArr.map()}
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">My Team</h1>
    <p class="lead">I am from ${location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">LinkedIn: ${linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

askManager();