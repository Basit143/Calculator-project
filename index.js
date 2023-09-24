//Node Modules ;
//import{a,b}from"./first.js";
//console.log (a+b);
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {
        name: "number1",
        type: "number",
        message: "kindly enter your first number :",
    },
    {
        name: "number2",
        type: "number",
        message: "kindly enter your second number :",
    },
    {
        name: "operator",
        type: "list",
        choices: ["*", "+", "-", "/"],
        message: "select operator :",
    }
]);
let { number1, number2, operator } = answers;
if (number1 && number2 && operator) {
    let result = 0;
    if (operator === "+") {
        result = number1 + number2;
    }
    else if (operator === "-") {
        result = number1 - number2;
    }
    if (operator === "/") {
        result = number1 / number2;
    }
    if (operator === "*") {
        result = number1 * number2;
    }
    console.log("your result is :", result);
}
else {
    console.log("kindly enter valid input");
}
;
//import inquirer from "inquirer";
//async function calculate() {
//  let answers: {
//    number1: number;
//    number2: number;
//    operator: string;
//  } = await inquirer.prompt([
//    {
//      name: "number1",
//      type: "number",
//      message: "Kindly enter your first number:",
//    },
//    {
//      name: "number2",
//      type: "number",
//      message: "Kindly enter your second number:",
//    },
//    {
//      name: "operator",
//      type: "list", // Change the type to "list"
//      choices: ["+", "-", "/", "*"], // Fix the choices
//      message: "Select operator:",
//    },
//  ]);
//  let { number1, number2, operator } = answers;
//  if (number1 && number2 && operator) {
//    let result: number = 0;
//    if (operator === "+") {
//      result = number1 + number2;
//    } else if (operator === "-") {
//      result = number1 - number2;
//    } else if (operator === "/") {
//      result = number1 / number2;
//    } else if (operator === "*") {
//      result = number1 * number2;
//    }
//    console.log("Your result is:", result);
//  } else {
//    console.log("Kindly enter valid input");
//  }
//}
//calculate();
