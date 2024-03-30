#! usr/bin/env node

import inquirer from "inquirer";

let todos: any = [];
let condition : boolean = true;

while(condition){


const answers = await inquirer.prompt([
  {
    message: "What do you want to add in your to-do list?",
    type: "input",
    name: "todo",
  },

  {
    message: "Are you sure, you want to add in this item in your to-do list?",
    type: "confirm",
    name: "addMore",
    default: "false",
  },
]);

todos.push(answers.todo);
condition = answers.addMore;
console.log(todos);
};