//Connection
const connection = require("./db/connection");
//add dependancies
const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

// Database Connect and Starter Title
connection.connect((err) => {
  if (err) throw err;

  userPrompt();
});

//Initial Prompt
const userPrompt = () => {
  inquirer.prompt([
    {
      name: "selection",
      type: "list",
      message: "Please select an option:",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        "Exit",
      ],
    },
  ]);
};
