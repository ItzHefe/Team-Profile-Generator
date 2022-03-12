const inquirer = require('inquirer');
const fs = require('fs');
let teamArr = [];

const Manager = require("./profiles/Manager");
const Engineer = require("./profiles/Engineer");
const Intern = require("./profiles/Intern");

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
      let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      teamArr.push(manager)
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
      type: "input",
      message: "What is your engineer's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your engineer's id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your engineer's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your engineer's GitHub username?",
      name: "github",
    }
  ])
    .then(answers => {
      let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      teamArr.push(engineer)
      mainMenu()
    })
}

function internQ() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your intern's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your intern's id?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your intern's email?",
      name: "email",
    },
    {
      type: "input",
      message: "What school does the Intern attend?",
      name: "school",
    }
  ])
    .then(answers => {
      let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      teamArr.push(intern)
      mainMenu()
    })
}

function buildTeam() {
  fs.writeFileSync('index.html', runRender(teamArr),'utf-8')
}

askManager();

// peopleArr.map(person => {
//   return `<h1>${person.name}</h1>
// <h3>${person.age}</h3>`;
// })

//${teamArr.map()}

//break apart the HTML to create the cards with their own functions and appending them to a bootstrap container to keep it neat looking
