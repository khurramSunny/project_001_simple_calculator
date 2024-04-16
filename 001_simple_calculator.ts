
// #! /usr/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([{
    type: "number",
    name: "first_number",
    message: "Enter your first number:"
},
{
    type: "number",
    name: "second_number",
    message: "Enter your second number:"
},
{
    name: "operator",
    type: "list",
    message: "Enter your operator:",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
}
])
//                          Conditional Statement:

if(answer.operator === "Addition"){
   console.log(answer.first_number+answer.second_number)
 }
 else if(answer.operator === "Subtraction"){
    console.log(answer.first_number-answer.second_number)
  }
  else if(answer.operator === "Multiplication"){
      console.log(answer.first_number*answer.second_number)
    }
    else if(answer.operator === "Division"){
      console.log(answer.first_number/answer.second_number)
    }
    else{
        console.log("Please enter valid operator.")
        //console.log(answer.first_number/answer.second_number)
      }     