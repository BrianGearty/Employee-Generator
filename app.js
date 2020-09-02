const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

function employeeQuestions() {
    return inquirer.prompt([
    {
    type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your work id?"   
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "role",
        message: "What is your job title?",
        choices: ["intern", 'manager', 'engineer']
    }
    ]);
} 
// Basic Employee Questions
employeeQuestions()
    .then(function(answers){
        if(answers.role == "intern" ){
            return internQuestions() ;
            
            
        } else if (answers.role == "manager"){
            return managerQuestions();

        } else if (answers.role == "engineer"){
            return engineerQuestions();
            
        } 
    })
            .catch(function(err){
                console.log("Not a valid job position.");
                console.log(err);
            })


// Intern school question
    function internQuestions() {
        return inquirer.prompt([
            {
            type: "input",
            name: "school",
            message: "What school do you attend?"
            }
])
    .then(function(answers){
        let intern = new Intern (answers.name, answers.id, answers.email, answers.school)
    team.push(intern);
console.log("intern success")
console.log(team);
    });
}

// Engineer username question
    function engineerQuestions() {
        return inquirer.prompt([
        {
        type: "input",
            name: "username",
            message: "What is your Github username?"
        }
    ])
    .then(function(answers){
        let engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
            team.push(engineer);
            console.log("engineer success")
            console.log(team);
    })
}

// Manager question
    function managerQuestions() {
        return inquirer.prompt([
            {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?"
            }
        ])
    .then(function(answers){
        let manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
            team.push(manager);
            console.log("manager success")
            console.log(manager);

    })
    .then(function(){
        addEmployee();
    })
}

// Add another Employee function
    
    function addEmployee(){
        return inquirer.prompt ([
            {
            type: "confirm",
            name: "addMember",
            Message: "Add another employee to the team?"
            }
        ])
    }
    // If yes go back to employeeQuestions else push team to render
    addEmployee()
        .then(function(answers){
            if(answers.addMember === "yes"){
                return employeeQuestions();
            } else {
                return team.push(render);
            }
        })
    

