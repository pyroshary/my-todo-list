#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let condition = true;
console.log("Welcome to Shary - TODO LIST ");
while (condition) {
    let addTask = await inquirer.prompt([{
            name: "Task",
            type: "input",
            message: "Enter your new task"
        }]);
    todolist.push(addTask.Task);
    console.log(`${addTask.Task} Task added in your todo list sucessfully`);
    let addMoretask = await inquirer.prompt([{
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more task?",
            default: "False"
        }]);
    condition = addMoretask.addMore;
}
console.log(chalk.bgWhite("Your updated list is", todolist));
